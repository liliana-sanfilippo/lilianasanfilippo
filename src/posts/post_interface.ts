export interface Post {
    title: string
    tags: string[]
    spoiler: string
    slug: string
    date: Date
    previousDetails?: { title: string; path: string }
    nextDetails?: { title: string; path: string },
    MDXComponent: React.ComponentType,
    image?: string
    cc?: string;
    objectPosition?: string
}

export interface LoadedPost extends Post {
    MDXComponent: React.ComponentType
}

