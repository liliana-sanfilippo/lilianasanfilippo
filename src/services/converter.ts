export type Direction = "forward" | "reverse" | "none";

export type Feature = {
    id: number;
    name: string;
    type: string;
    start: number;
    end: number;
    direction: Direction;
    sequence?: string;
    gc?: number;
};

export type FeatureSettings = {
    include: boolean;
    category: string;
    purpose: string;
    targetOrganism: string;
};

export type OutputOptions = {
    length: number;
    digits: number;
    varName: string;
    sourceName?: string;
};


export const CATEGORIES: { value: string; label: string }[] = [
    { value: "promoter", label: "promoter" },
    { value: "cds", label: "CDS / protein" },
    { value: "reporter", label: "reporter" },
    { value: "resistance", label: "resistance / selection" },
    { value: "tag", label: "tag / signal peptide" },
    { value: "linker", label: "linker / 2A / IRES" },
    { value: "regulatory", label: "regulatory" },
    { value: "terminator", label: "terminator / polyA" },
    { value: "origin", label: "origin" },
    { value: "primer", label: "primer" },
    { value: "restriction_site", label: "restriction site" },
    { value: "misc", label: "other" },
];


const TYPE_CATEGORY: Record<string, string> = {
    promoter: "promoter",
    polya_signal: "terminator",
    terminator: "terminator",
    rep_origin: "origin",
    primer_bind: "primer",
    primer: "primer",
    "restriction site": "restriction_site",
    protein_bind: "regulatory",
    enhancer: "regulatory",
    rbs: "regulatory",
    regulatory: "regulatory",
    sig_peptide: "tag",
};

// Do not change ORDER!!
const NAME_RULES: [RegExp, string][] = [
    [/nanobody|binder|antibod|\bscfv\b/i, "cds"],
    [/\b(amp|kan|kana|neo|cm|cam|tet|hyg|hph|puro|zeo|bsd|bla|spec|gent|strep|blast)r\b|resist|\b(bla|aada|nptii|pac|hph|bsr|sh ble)\b/i, "resistance"],
    [/\bori\b|origin/i, "origin"],
    [/\b[a-z]?(gfp|rfp|yfp|cfp|bfp)\b|egfp|mcherry|mscarlet|tdtomato|mneon|mkate|dsred|venus|citrine|cerulean|luciferase|\b(n|f|r)?luc\b|lacz/i, "reporter"],
    [/\b[ptef]2a\b|ires/i, "linker"],
    [/linker|\(g4s\)|\bgs\d*\b/i, "linker"],
    [/\b(6x)?his\b|flag|\bha\b|\bmyc\b|\bv5\b|strep-?tag|\bgst\b|\bmbp\b|\bsumo\b|\bnls\b|\bnes\b|\btag\b/i, "tag"],
    [/kozak|enhancer|operator|\brbs\b|shine|response element|binding site/i, "regulatory"],
    [/poly ?\(?a\)?|terminator/i, "terminator"],
];


export function guessCategory(f: Feature): string {
    const byType = TYPE_CATEGORY[f.type.toLowerCase()];
    if (byType) return byType;
    for (const [re, cat] of NAME_RULES) if (re.test(f.name)) return cat;
    // Sehr kurze ungerichtete Features sind fast immer Bindestellen (TF-Sites o. ä.)
    const len = Math.abs(f.end - f.start) + 1;
    if (f.type === "misc_feature" && len <= 30 && f.direction === "none") return "regulatory";
    if (f.type.toLowerCase() === "cds") return "cds";
    return "misc";
}

// ---------------------------------------------------------------------------
// CSV


export function parseCsv(text: string): string[][] {
    const rows: string[][] = [];
    let row: string[] = [];
    let field = "";
    let quoted = false;

    text = text.replace(/^﻿/, "");
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (quoted) {
            if (c === '"') {
                if (text[i + 1] === '"') { field += '"'; i++; }
                else quoted = false;
            } else field += c;
        } else if (c === '"') quoted = true;
        else if (c === ",") { row.push(field); field = ""; }
        else if (c === "\n" || c === "\r") {
            if (c === "\r" && text[i + 1] === "\n") i++;
            row.push(field); field = "";
            if (row.some(f => f.trim() !== "")) rows.push(row);
            row = [];
        } else field += c;
    }
    row.push(field);
    if (row.some(f => f.trim() !== "")) rows.push(row);
    return rows;
}

const COLUMN_ALIASES: Record<string, string[]> = {
    name: ["name"],
    type: ["type"],
    start: ["minimum", "start"],
    end: ["maximum", "end"],
    direction: ["direction", "strand"],
    sequence: ["sequence (with extension)", "sequence"],
    gc: ["%gc", "gc"],
};

function toNumber(s: string | undefined): number | undefined {
    if (s === undefined) return undefined;
    const t = s.trim().replace(",", ".");
    if (t === "" || t.toLowerCase() === "none") return undefined;
    const n = Number(t);
    return Number.isFinite(n) ? n : undefined;
}

function toDirection(s: string | undefined): Direction {
    const t = (s ?? "").trim().toLowerCase();
    if (t === "forward" || t === "+" || t === "1") return "forward";
    if (t === "reverse" || t === "-" || t === "-1") return "reverse";
    return "none";
}

/** Liest einen Benchling-Annotations-Export. Wirft bei fehlenden Pflichtspalten. */
export function parseBenchlingCsv(text: string): Feature[] {
    const rows = parseCsv(text);
    if (rows.length < 2) throw new Error("Die CSV enthält keine Datenzeilen.");

    const header = rows[0].map(h => h.trim().toLowerCase());
    const col: Record<string, number> = {};
    for (const [key, aliases] of Object.entries(COLUMN_ALIASES)) {
        col[key] = header.findIndex(h => aliases.includes(h));
    }
    const missing = ["name", "start", "end"].filter(k => col[k] < 0);
    if (missing.length) {
        throw new Error(
            `Spalten fehlen: ${missing.join(", ")}. Erwartet wird ein Benchling-Export ` +
            `mit „Name“, „Minimum“, „Maximum“.`
        );
    }

    const get = (r: string[], key: string) => (col[key] >= 0 ? r[col[key]] : undefined);
    const features: Feature[] = [];

    rows.slice(1).forEach((r, i) => {
        const start = toNumber(get(r, "start"));
        const end = toNumber(get(r, "end"));
        const name = (get(r, "name") ?? "").trim();
        if (!name || start === undefined || end === undefined) return;

        const seq = (get(r, "sequence") ?? "").trim();
        features.push({
            id: i,
            name,
            type: (get(r, "type") ?? "").trim() || "unknown",
            start: Math.round(start),
            end: Math.round(end),
            direction: toDirection(get(r, "direction")),
            sequence: seq || undefined,
            gc: toNumber(get(r, "gc")),
        });
    });

    if (!features.length) throw new Error("No features found");
    return features;
}


export function guessLength(features: Feature[]): number {
    return Math.max(...features.map(f => Math.max(f.start, f.end)));
}

export function defaultSettings(f: Feature): FeatureSettings {
    return {
        include: true,
        category: guessCategory(f),
        purpose: "",
        targetOrganism: "",
    };
}

// ---------------------------------------------------------------------------
// Skalierung + Output


export function scale(start: number, end: number, length: number, digits: number): [number, number] {
    if (end < start) end += length;
    const r = (x: number) => Number(x.toFixed(digits));
    return [r((start - 1) / length), r(end / length)];
}

const str = (s: string) => JSON.stringify(s);

function entry(key: number, f: Feature, s: FeatureSettings, o: OutputOptions): string {
    const [from, to] = scale(f.start, f.end, o.length, o.digits);
    const I = "        ";
    const lines = [
        `    // ${f.type}, ${f.start}..${f.end} bp, ${f.direction}`,
        "    {",
        `${I}...gene_defaults,`,
        `${I}key: ${key},`,
        `${I}name: ${str(f.name)},`,
        `${I}from: ${from},`,
        `${I}to: ${to},`,
        `${I}category: ${str(s.category)},`,
    ];
    if (f.direction !== "none") lines.push(`${I}direction: ${str(f.direction)},`);

    const ann: string[] = [];
    if (s.purpose.trim()) ann.push(`purpose: ${str(s.purpose.trim())},`);
    if (s.targetOrganism.trim()) ann.push(`targetOrganism: ${str(s.targetOrganism.trim())},`);
    if (f.sequence) ann.push(`sequence: ${str(f.sequence)},`);
    if (f.gc !== undefined) ann.push(`gc: ${f.gc},`);
    if (ann.length) {
        lines.push(`${I}annotations: {`, ...ann.map(a => `${I}    ${a}`), `${I}},`);
    }
    lines.push("    },");
    return lines.join("\n");
}

export function toTypeScript(
    features: Feature[],
    settings: Record<number, FeatureSettings>,
    o: OutputOptions,
): string {
    const selected = features
        .filter(f => settings[f.id]?.include)
        .sort((a, b) => a.start - b.start);

    return [
        `// Created ${o.sourceName ? ` from ${o.sourceName}` : ""}`,
        `// Length: ${o.length} bp`,
        `import { type Gene, gene_defaults } from "./Gene";`,
        "",
        `export const ${o.varName}: Gene[] = [`,
        ...selected.map((f, i) => entry(i, f, settings[f.id], o)),
        "];",
        "",
    ].join("\n");
}