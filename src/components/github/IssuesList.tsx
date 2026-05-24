import { useEffect, useState } from 'react';

interface Issue {
    number: number;
    title: string;
    state: 'open' | 'closed';
    html_url: string;
    user: {
        login: string;
        avatar_url: string;
    };
    labels: Array<{
        name: string;
        color: string;
    }>;
    created_at: string;
    body?: string;
}

export function IssuesList({repo}: {repo: string}) {
    const [issues, setIssues] = useState<Issue[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState<'all' | 'open' | 'closed'>('open');
    const CACHE_KEY = `github_issues_cache_${repo}`;
    const CACHE_DURATION = 5 * 60 * 1000; // 5 Minuten

    useEffect(() => {
        setLoading(true);

        // Prüfe Cache
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
            const { data, timestamp } = JSON.parse(cached);
            if (Date.now() - timestamp < CACHE_DURATION) {
                setIssues(data);
                setLoading(false);
                return;
            }
        }

        // Fetch von API
        fetch(`https://api.github.com/repos/liliana-sanfilippo/${repo}/issues?state=all&per_page=100`)
            .then(res => res.json())
            .then(data => {
                const actualIssues = data.filter((issue: any) => !issue.pull_request);

                // Speichere im Cache
                localStorage.setItem(CACHE_KEY, JSON.stringify({
                    data: actualIssues,
                    timestamp: Date.now()
                }));

                setIssues(actualIssues);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [repo]);

    const filteredIssues = issues.filter(issue =>
        filter === 'all' ? true : issue.state === filter
    );

    if (loading) return (
        <div className="container py-4">
            <div className="animate-pulse">Loading issues...</div>
        </div>
    );

    if (error) return (
        <div className="container py-4">
            <div className="text-red-600">Error loading issues: {error}</div>
        </div>
    );

    return (
        <div className="container py-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold" id={"issues"}>Issues</h2>
                <a
                    href={`https://github.com/liliana-sanfilippo/${repo}/issues/new`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-(--igemdarkgreen) text-white rounded hover:bg-(--igemdarkgreen)    "
                >
                    New Issue
                </a>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-4 mb-6 border-b">
                <button
                    onClick={() => setFilter('open')}
                    className={`px-4 py-2 font-medium ${
                        filter === 'open'
                            ? 'border-b-2 border-blue-600 text-blue-600'
                            : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                    Open ({issues.filter(i => i.state === 'open').length})
                </button>
                <button
                    onClick={() => setFilter('closed')}
                    className={`px-4 py-2 font-medium ${
                        filter === 'closed'
                            ? 'border-b-2 border-blue-600 text-blue-600'
                            : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                    Closed ({issues.filter(i => i.state === 'closed').length})
                </button>
                <button
                    onClick={() => setFilter('all')}
                    className={`px-4 py-2 font-medium ${
                        filter === 'all'
                            ? 'border-b-2 border-blue-600 text-blue-600'
                            : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                    All ({issues.length})
                </button>
            </div>

            {/* Issues List */}
            <div className="space-y-3">
                {filteredIssues.map(issue => (
                    <div
                        key={issue.number}
                        className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    >
                        <div className="flex items-start gap-3">
                            <img
                                src={issue.user.avatar_url}
                                alt={issue.user.login}
                                className="w-10 h-10 rounded-full"
                            />

                            <div className="flex-1 min-w-0">
                                <div className="flex items-start gap-2 mb-2">
                                    <a
                                        href={issue.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg font-semibold hover:text-blue-600 flex-1"
                                    >
                                        {issue.title}
                                    </a>
                                    <span className={`px-2 py-1 text-xs font-medium rounded whitespace-nowrap ${
                                        issue.state === 'open'
                                            ? 'bg-(--igemlightgreen) text-(--igemdarkgreen)'
                                            : 'bg-(--verylightblue) text-(--text-primary)'
                                    }`}>
                    {issue.state}
                  </span>
                                </div>

                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                                    <span className="font-mono">#{issue.number}</span>
                                    <span>by {issue.user.login}</span>
                                    <span>{new Date(issue.created_at).toLocaleDateString()}</span>
                                </div>

                                {/* Labels */}
                                {issue.labels.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {issue.labels.map(label => (
                                            <span
                                                key={label.name}
                                                className="px-2 py-1 text-xs font-medium rounded"
                                                style={{
                                                    backgroundColor: `#${label.color}30`,
                                                    color: `#${label.color}`,
                                                    border: `1px solid #${label.color}50`
                                                }}
                                            >
                        {label.name}
                      </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {filteredIssues.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        <div className="text-4xl mb-2">📭</div>
                        <div>No {filter} issues found</div>
                    </div>
                )}
            </div>
        </div>
    );
}