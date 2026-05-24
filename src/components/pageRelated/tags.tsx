import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import TagPage from "./TagPage"
import postsWithNav from "../../posts";


export default function TagPageWrapper() {
    const {tag} = useParams<{ tag: string }>()
    const [filteredPosts, setFilteredPosts] = useState<any[]>([])

    useEffect(() => {
        if (!tag) return

        const lowerTag = tag.toLowerCase()
        const filtered = postsWithNav.filter(post => post.tags?.some((t: string) => t.toLowerCase() === lowerTag))
        setFilteredPosts(filtered)
    }, [tag])


    return <TagPage name={tag!} routes={filteredPosts}/>
}
