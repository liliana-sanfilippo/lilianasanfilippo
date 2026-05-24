import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import "../../componentStyling/wikipage.css"
import {stringToSlug} from "@liliana-sanfilippo/react-wiki-components";
import {H2, H3} from "../other/H2";

interface Heading {
    id: string;
    text: string;
    level: number;
}

export function WikiPage({page, folder}: { page?: string , folder?: string}) {
    const params = useParams<{ pageName: string, folderName: string }>();
    const pageName = params.pageName || page || "Home";
    const foldername = params.folderName || folder || "wiki";
    const [content, setContent] = useState('');
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        let wikiPath: string;

        if (page) {
            wikiPath = `/${foldername}/${page}.md`;
        } else {
            wikiPath = `/${foldername}/${pageName}.md`;
        }

        fetch(wikiPath)
            .then(res => {
                if (!res.ok) throw new Error(`Page not found (${res.status})`);
                return res.text();
            })
            .then(text => {
                const txt = text.replace(/:x:/g, "🚫")
                    .replace(/:white_check_mark:/g, "✅");
                setContent(txt);

                const extractedHeadings = extractHeadings(text);
                setHeadings(extractedHeadings);

                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [pageName]);


    useEffect(() => {
        const handleScroll = () => {
            const headingElements = headings.map(h => document.getElementById(h.id));

            for (let i = headingElements.length - 1; i >= 0; i--) {
                const element = headingElements[i];
                if (element && element.getBoundingClientRect().top < 100) {
                    setActiveId(headings[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [headings]);

    if (loading) return <div className="container py-4">Loading...</div>;
    if (error) return (
        <div className="container py-4">
            <div className="text-red-600">Error: {error}</div>
            <Link to="/Home" className="text-blue-600">
                ← Back Home
            </Link>
        </div>
    );

    return (
        <div className="container py-4 wiki-page">
            <div className="flex gap-8">
                {/* Main Content */}
                { headings.length > 0 && (
                    <aside className="hidden lg:block w-64 flex-shrink-0 me-5">
                        <div className="sticky top-24">
                            <h3 className="font-semibold text-sm uppercase text-gray-600 mb-4">
                                On this page
                            </h3>
                            <nav>
                                <ul className="space-y-2 text-sm">
                                    {headings.map(heading => (
                                        <li
                                            key={heading.id}
                                            style={{paddingLeft: `${(heading.level - 1) * 0.75}rem`}}
                                        >

                                            <a href={`#${heading.id}`}
                                               className={`blocktransition-colors ${
                                                   activeId === heading.id
                                                       ? 'text-blue-600 font-medium'
                                                       : 'text-gray-600'
                                               }`}
                                               onClick={(e) => {
                                                   e.preventDefault();
                                                   document.getElementById(heading.id)?.scrollIntoView({
                                                       behavior: 'smooth',
                                                       block: 'start',
                                                       inline: 'nearest',
                                                   });
                                               }}
                                            >
                                                {heading.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </aside>
                )}
                <main className="flex flex-col max-w-[70vw] gap-8 lg:gap-16">
                    <div className="prose max-w-none">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                h1: ({node, children, ...props}) => {
                                    const text = String(children);
                                    const id =  stringToSlug(text);
                                    return <H2 id={id} {...props}>{children}</H2>;
                                },
                                h2: ({node, children, ...props}) => {
                                    const text = String(children);
                                    const id = stringToSlug(text);
                                    return <H3 id={id} {...props}>{children}</H3>;
                                },
                                h3: ({node, children, ...props}) => {
                                    const text = String(children);
                                    const id = stringToSlug(text);
                                    return <h3 id={id} {...props}>{children}</h3>;
                                },
                                h4: ({node, children, ...props}) => {
                                    const text = String(children);
                                    const id = stringToSlug(text);
                                    return <h4 id={id} {...props}>{children}</h4>;
                                },
                                h5: ({node, children, ...props}) => {
                                    const text = String(children);
                                    const id = stringToSlug(text);
                                    return <h5 id={id} {...props}>{children}</h5>;
                                },
                                h6: ({node, children, ...props}) => {
                                    const text = String(children);
                                    const id = generateId(text);
                                    return <h6 id={id} {...props}>{children}</h6>;
                                },
                                a: ({node, href, children, ...props}) => {
                                    console.log("FOUND < A >:" + href);

                                    if (href?.includes('github.com') && href?.includes('/')) {

                                        const match = href.match(/\/liliana-sanfilippo\/(.+)/);
                                        if (match) {
                                            let path = match[1];

                                            path = path.replace(/^(blob|tree)\/[^/]+\//, '');

                                            path = path.replace(/\.md$/, '');

                                            path = path.replace(/\/wiki\//g, '/');

                                            const internalPath = process.env.REACT_APP_PACKAGE_PATH + "/" + path;

                                            console.log("GitHub Link erkannt, interner Pfad:", internalPath);
                                            return <Link to={internalPath}>{children}</Link>;
                                        }
                                    }


                                    return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
                                },
                                img: ({node, src, alt, ...props}) => {
                                    return (
                                        <img
                                            src={src}
                                            alt={alt}
                                            loading="lazy"
                                            className="max-w-full h-auto"
                                            {...props}
                                        />
                                    );
                                }
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>
                </main>

            </div>
        </div>
    );
}

// Extrahiere Headings aus Markdown
function extractHeadings(markdown: string): Heading[] {
    const headings: Heading[] = [];
    const lines = markdown.split('\n');

    lines.forEach(line => {
        const match = line.match(/^(#{1,6})\s+(.+)$/);
        if (match) {
            const level = match[1].length;
            const text = match[2].trim();
            const id = text
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-');

            headings.push({id, text, level});
        }
    });

    return headings;
}


function generateId(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}