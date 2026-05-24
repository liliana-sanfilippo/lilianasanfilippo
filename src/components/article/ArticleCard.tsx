import React from 'react'
import {Card} from "react-bootstrap";
import {Post} from "../../posts/post_interface";
import {formatDate} from "../../utils/formats";
import {Link} from "react-router-dom";


function ArticleCard({post, noimg, h}: {
  post: Post, noimg?: boolean, h? :string
}) {
    const image: string = post.image ? post.image : "https://static.igem.wiki/teams/5833/other/placeholder.svg";
    const height = h? `h-${h}` : "h-100"
    return (
        <Card className={`mb-3 mx-auto ${height} article-card`}>
            <Card.Header>
                <time dateTime={post.date.toUTCString()}>{formatDate(post.date)}</time>
            </Card.Header>
            {!noimg ? <><Card.Img className={"p-0"} variant="top" src={image} style={{objectPosition: post.objectPosition ? post.objectPosition : "center"}}/></> : <></>}
            <Card.Body>
                  {post.cc && (<p className={"my-0"}><small className="img-cc"> Image: {post.cc} </small></p>)}
                  <p className={"my-2"}> <Link to={`/posts/${post.slug}`}>{post.title}</Link> </p>
                  {post.spoiler && <p className={"m-1"}>{post.spoiler}</p>}
                {post.tags && post.tags.length && (<>
                    {/*
                        {' '}
                    &bull;{' '}
                    */}
                    <ul className={"tags"}>
                        {post.tags.map((tag: string) => (<li key={tag}>
                            <Link to={`${"/".replace(/\/$/, '')}/tags/${tag}`}>{tag}</Link>
                        </li>))}
                    </ul>
                </>)}
            </Card.Body>
        </Card>
    )
}
export default ArticleCard;