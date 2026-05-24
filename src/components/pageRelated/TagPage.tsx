import React from 'react'
import {Post} from "../../posts/post_interface";
import ArticleCard from "../article/ArticleCard";

interface TagPageProps {
    name: string
    routes: Post[]
}

function TagPage({name, routes}: TagPageProps) {
    return (<div>
            <h1>{name} posts</h1>
            <ul>
                {routes.map(route => (<li key={route.slug}>
                        <ArticleCard post={route}/>
                    </li>))}
            </ul>
        </div>)
}

export default TagPage
