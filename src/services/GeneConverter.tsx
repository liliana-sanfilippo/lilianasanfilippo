import { useMemo, useRef, useState } from "react";
import type { DragEvent } from "react";
import {
    type Feature, type FeatureSettings,
    parseBenchlingCsv, guessLength, defaultSettings, toTypeScript, scale, CATEGORIES,
} from "./converter";
import "./GeneConverter.css";

export function GeneConverter() {
    const [fileName, setFileName] = useState<string | null>(null);
    const [features, setFeatures] = useState<Feature[]>([]);
    const [settings, setSettings] = useState<Record<number, FeatureSettings>>({});
    const [lengthInput, setLengthInput] = useState("");
    const [guessedLength, setGuessedLength] = useState(0);
    const [varName, setVarName] = useState("genes");
    const [error, setError] = useState<string | null>(null);
    const [dragging, setDragging] = useState(false);
    const [copied, setCopied] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // ---- Datei laden -------------------------------------------------------

    async function load(file: File) {
        setError(null);
        try {
            const parsed = parseBenchlingCsv(await file.text());
            const s: Record<number, FeatureSettings> = {};
            parsed.forEach(f => { s[f.id] = defaultSettings(f); });
            setFeatures(parsed);
            setSettings(s);
            setGuessedLength(guessLength(parsed));
            setLengthInput("");
            setFileName(file.name);
        } catch (e) {
            setError(e instanceof Error ? e.message : String(e));
        }
    }

    function onDrop(e: DragEvent) {
        e.preventDefault();
        setDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) load(file);
    }

    // ---- Abgeleitete Werte -------------------------------------------------

    const parsedLength = Number(lengthInput);
    const lengthValid = lengthInput === "" || (Number.isInteger(parsedLength) && parsedLength > 0);
    const length = lengthInput !== "" && lengthValid ? parsedLength : guessedLength;
    const varValid = /^[A-Za-z_$][\w$]*$/.test(varName);

    const types = useMemo(() => {
        const m = new Map<string, number>();
        features.forEach(f => m.set(f.type, (m.get(f.type) ?? 0) + 1));
        return [...m.entries()];
    }, [features]);

    const sorted = useMemo(() => [...features].sort((a, b) => a.start - b.start), [features]);
    const includedCount = features.filter(f => settings[f.id]?.include).length;

    const output = useMemo(() => {
        if (!features.length || !varValid) return "";
        return toTypeScript(features, settings, {
            length, digits: 4, varName, sourceName: fileName ?? undefined,
        });
    }, [features, settings, length, varName, varValid, fileName]);

    // ---- Aktionen ----------------------------------------------------------

    const update = (id: number, patch: Partial<FeatureSettings>) =>
        setSettings(s => ({ ...s, [id]: { ...s[id], ...patch } }));

    const setType = (type: string, include: boolean) =>
        setSettings(s => {
            const next = { ...s };
            features.filter(f => f.type === type).forEach(f => { next[f.id] = { ...next[f.id], include }; });
            return next;
        });

    async function copy() {
        await navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }

    function download() {
        const blob = new Blob([output], { type: "text/plain" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = (fileName?.replace(/\.csv$/i, "") ?? "genes").replace(/\s+/g, "_") + ".ts";
        a.click();
        URL.revokeObjectURL(a.href);
    }

    // ---- Render ------------------------------------------------------------

    return (
        <div className="gc">
            <header className="gc-header">
                <h1>CSV → Gene</h1>
                <p>Drop Annotation-CSV from Geneious here, choose/filter features, copy TypeScript.</p>
            </header>

            <div
                className={`gc-drop ${dragging ? "is-dragging" : ""}`}
                onDragOver={e => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={onDrop}
                onClick={() => inputRef.current?.click()}
                role="button"
                tabIndex={0}
                onKeyDown={e => (e.key === "Enter" || e.key === " ") && inputRef.current?.click()}
            >
                <input
                    ref={inputRef}
                    type="file"
                    accept=".csv,text/csv"
                    hidden
                    onChange={e => { const f = e.target.files?.[0]; if (f) load(f); e.target.value = ""; }}
                />
                {fileName
                    ? <><strong>{fileName}</strong><span>{features.length} Features Use other file</span></>
                    : <><strong>drop CSV here</strong><span> or click to select</span></>}
            </div>

            {error && <div className="gc-error">{error}</div>}

            {features.length > 0 && (
                <>
                    <section className="gc-section">
                        <h2>Settings</h2>
                        <div className="gc-options">
                            <label>
                                <span>Length (bp)</span>
                                <input
                                    inputMode="numeric"
                                    placeholder={String(guessedLength)}
                                    value={lengthInput}
                                    onChange={e => setLengthInput(e.target.value.trim())}
                                    aria-invalid={!lengthValid}
                                />
                                <small className={lengthInput === "" ? "gc-warn" : ""}>
                                    {!lengthValid
                                        ? "Please enter positive number"
                                        : lengthInput === ""
                                            ? `Estimated from biggest coordinate. Please enter correct length if false.`
                                            : " "}
                                </small>
                            </label>
                            <label>
                                <span>Constant name</span>
                                <input value={varName} onChange={e => setVarName(e.target.value.trim())} aria-invalid={!varValid} />
                                <small>{varValid ? " " : "Not a valid name."}</small>
                            </label>
                        </div>

                        <div className="gc-types">
                            {types.map(([type, count]) => {
                                const ofType = features.filter(f => f.type === type);
                                const on = ofType.filter(f => settings[f.id]?.include).length;
                                return (
                                    <label key={type} className="gc-chip">
                                        <input
                                            type="checkbox"
                                            checked={on === count}
                                            ref={el => { if (el) el.indeterminate = on > 0 && on < count; }}
                                            onChange={e => setType(type, e.target.checked)}
                                        />
                                        {type} <span className="gc-muted">{count}</span>
                                    </label>
                                );
                            })}
                        </div>
                    </section>

                    <section className="gc-section">
                        <h2>Features <span className="gc-muted">{includedCount} von {features.length} ausgewählt</span></h2>
                        <div className="gc-table-wrap">
                            <table className="gc-table">
                                <thead>
                                <tr>
                                    <th />
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Scaling</th>
                                    <th>Direction</th>
                                    <th>Category</th>
                                    <th>Purpose (optional)</th>
                                    <th>Organism (optional)</th>
                                </tr>
                                </thead>
                                <tbody>
                                {sorted.map(f => {
                                    const s = settings[f.id];
                                    const [from, to] = scale(f.start, f.end, length, 3);
                                    return (
                                        <tr key={f.id} className={s.include ? "" : "is-off"}>
                                            <td>
                                                <input type="checkbox" checked={s.include}
                                                       onChange={e => update(f.id, { include: e.target.checked })}
                                                       aria-label={`Include ${f.name}`} />
                                            </td>
                                            <td>
                                                <div className="gc-name">{f.name}</div>
                                                <div className="gc-muted">{f.type}{f.gc !== undefined ? ` · ${f.gc} % GC` : ""}</div>
                                            </td>
                                            <td className="gc-num">{f.start}–{f.end}</td>
                                            <td className="gc-num">{from}–{to}</td>
                                            <td>{f.direction === "forward" ? "→" : f.direction === "reverse" ? "←" : "–"}</td>
                                            <td>
                                                <select className="gc-select" value={s.category}
                                                        onChange={e => update(f.id, { category: e.target.value })}
                                                        aria-label={`Category for ${f.name}`}>
                                                    {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                                                </select>
                                            </td>
                                            <td>
                                                <input className="gc-text" value={s.purpose} placeholder="—"
                                                       onChange={e => update(f.id, { purpose: e.target.value })} />
                                            </td>
                                            <td>
                                                <input className="gc-text" value={s.targetOrganism} placeholder="—"
                                                       onChange={e => update(f.id, { targetOrganism: e.target.value })} />
                                            </td>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="gc-section">
                        <div className="gc-output-head">
                            <h2>Ergebnis</h2>
                            <div className="gc-actions">
                                <button onClick={copy} disabled={!output}>{copied ? "Copied ✓" : "Copy"}</button>
                                <button onClick={download} disabled={!output}>.ts herunterladen</button>
                            </div>
                        </div>
                        <pre className="gc-output"><code>{output || "// Invalid setting"}</code></pre>
                    </section>
                </>
            )}
        </div>
    );
}