import React from "react";
import PostByTags from "../../components/other/PostByTags";
import {H2} from "../../components/other/H2";
import posts from "../../posts";
import {Post} from "../../posts/post_interface";
import ArticleCard from "../../components/article/ArticleCard";

// TODO einstellen, dass auf jeder Projektseit die dazugehörige Posts angezeigt werden 
export function BlogPage() {
    const postOne = posts[0];
    let otherPosts: Post[];
    if (posts.length > 1) {
        otherPosts = posts.slice(1)
    } else {
        otherPosts = posts
    }
    return (<div className={"mx-auto gap-8 lg:gap-16"}>
            <H2>By category</H2>
            <div className={"row gap-8 lg:gap-16 mx-auto"}>
                <PostByTags tag={"iGEM"}/>
                <PostByTags tag={"AI"}/>
                <PostByTags tag={"BFH"}/>
                <PostByTags tag={"React"}/>
            </div>
            <H2>All posts</H2>
            <div id={"latestpostwrapper"} className="h-100 md:m-5 md:p-5">
                <div id={"latestpost"} className="mx-auto" key={postOne.slug}>
                    <ArticleCard post={postOne}/>
                </div>
            </div>
            <div className={'row gap-8 lg:gap-16 mx-auto'}>
                {otherPosts.map((route: Post) => (
                    <div className={"col"}>
                        <ArticleCard post={route} key={route.slug}/>
                    </div>
                ))}
            </div>
        </div>
    )
}