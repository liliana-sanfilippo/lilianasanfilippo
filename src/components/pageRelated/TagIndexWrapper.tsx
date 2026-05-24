import TagIndex from "../other/TagIndex"
import postsWithNav from "../../posts";

export default function TagIndexPageWrapper() {

    const tagMap: Record<string, number> = {}
    postsWithNav.forEach(post => {

        post.tags?.forEach((tag: string) => {
            const key = tag.toLowerCase()
            tagMap[key] = (tagMap[key] || 0) + 1
        })
    })

    const tagsArray = Object.keys(tagMap).sort().map(tag => ({
        name: tag, href: `/tags/${tag}`, count: tagMap[tag],
    }))


    return <TagIndex tags={tagsArray}/>
}
