import React from 'react'
import {Link} from 'react-router-dom'
import {MDXProvider} from '@mdx-js/react'
import {formatDate} from "../../utils/formats";
import {Post} from "../../posts/post_interface";


export interface BlogPostLayoutProps {
    post: Post
}

function BlogPostLayout({post}: BlogPostLayoutProps) {

    if (!post) {
        return <div>Post not found</div> // oder deine NotFoundPage
    }
    const MDXComponent = post.MDXComponent
    return (<div>
        <article>
            <header>
                <img className={"mb-3"} src={post.image} style={{maxHeight: "50vh", width: "100%", objectFit: "cover", objectPosition: post.objectPosition ? post.objectPosition : "top"}} />
                <small  className={"text-gray-500"} >Image: {post.cc} </small>
                <h1 className={"mb-3 mt-4"}>
                    {post.title}
                </h1>
                <i className={"text-gray-500"}>{formatDate(post.date)}</i>
            </header>
            {}

            <div className="row my-5">
                <div className="col-12">
                    <MDXProvider
                        components={{
                            a: (props: any) => <Link to={props.href}>{props.children}</Link>,
                        }}
                    >
                        <MDXComponent/>
                    </MDXProvider>
                </div>
            </div>

            <footer>
                <div className={"row"}>
                    <div className={"col-3"}>
                        {post.previousDetails && (<Link
                            to={post.previousDetails.path}>
                            ← {post.previousDetails.title}
                        </Link>)}
                    </div>
                    <div className={"col"}>

                    </div>
                    <div className={"col-3"}>
                        {post.nextDetails && (<Link to={post.nextDetails.path}>
                            {post.nextDetails.title} →
                        </Link>)}
                    </div>
                </div>
            </footer>
        </article>
    </div>)
}

export default BlogPostLayout
