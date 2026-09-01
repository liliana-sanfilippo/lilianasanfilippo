import SyntaxHighlighterImport from 'react-syntax-highlighter/dist/esm/prism';
import { useState } from 'react';


export function TypeScriptCode({children}: { children: string }) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(children).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="relative">
            <SyntaxHighlighterImport language="typescript">
                {children}
            </SyntaxHighlighterImport>
            <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 btn-primary px-2 py-1 text-sm rounded"
            >
                {copied ? 'Code copied!' : 'Copy Code'}
            </button>
        </div>
    );
};




