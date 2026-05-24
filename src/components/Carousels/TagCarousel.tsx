import React, {useEffect, useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import ArticleCard from "../article/ArticleCard";
import postsWithNav from "../../posts";

export default function TagCarousel({tag}: { tag: string }) {
    const [filteredPosts, setFilteredPosts] = useState<any[]>([])

    useEffect(() => {
        if (!tag) return
        const lowerTag = tag.toLowerCase()
        const filtered = postsWithNav.filter(post => post.tags?.some((t: string) => t.toLowerCase() === lowerTag))
        setFilteredPosts(filtered)
    }, [tag])


    return (<div>
        {/* <h2>{capitalize(tag)} posts</h2>*/}
        <Carousel data-bs-theme="" className={"md:max-w-[50vw] mx-auto h-100"}>
            {filteredPosts.map((route, i) => (<Carousel.Item key={i}>
                <ul>
                    <li key={route.slug}>
                        <ArticleCard post={route}/>
                    </li>
                </ul>
            </Carousel.Item>))}
        </Carousel>
    </div>)
}

