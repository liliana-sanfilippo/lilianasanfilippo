import {useParams} from "react-router-dom";
import postsWithNav from "../../posts";
import BlogPostLayout from "./BlogPostLayout";

export function BlogPostWrapper() {
    const {slug} = useParams<{ slug: string }>()
    const post = postsWithNav.find(p => p.slug === slug)
    if (!post) return <div>Post not found</div>
    return <BlogPostLayout post={post}/>
}
