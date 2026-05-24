import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function WikiIndex() {
    const [pages, setPages] = useState<string[]>([]);

    useEffect(() => {
        // Du kannst eine Liste der Seiten generieren lassen
        // oder manuell pflegen
        fetch('/wiki/pages.json')
            .then(res => res.json())
            .then(data => setPages(data))
            .catch(() => {
                // Fallback zu bekannten Seiten
                setPages(['Home', 'Getting-Started', 'API-Reference']);
            });
    }, []);

    return (
        <div className="container py-4">
            <h1>React BibTeX Reference Manager Wiki</h1>
            <p>Documentation for the React BibTeX Reference Manager project.</p>

            <ul className="mt-4">
                {pages.map(page => (
                    <li key={page}>
                        <Link to={`/wiki/${page}`} className="text-blue-600 hover:underline">
                            {page.replace(/-/g, ' ')}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}