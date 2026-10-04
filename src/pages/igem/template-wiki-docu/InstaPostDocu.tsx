import React from "react";
import {H1, H2} from "../../../components/other/H2";
import {TypeScriptCode} from "../../../components/TypeScriptCode";
import {Col, Row} from "react-bootstrap";
import {InstaPost, InstaPostType} from "@liliana-sanfilippo/react-wiki-components";


export function InstaPostDocu() {

    const posts: InstaPostType[] = [
        {
            post_code: "DZJ6RbeiBRG",
            image: "https://static.igem.wiki/teams/6221/wiki/community-board/insta/hg-tokyo-podcast.avif",
            caption: <span> Podcast Alert: Special Episode of <a href="/ayesdabio/">@ayesdabio</a> The Podcast with HG TOKYO. Be ready to get blown away by this team of Japanese teenagers who initially knew nothing about synthetic biology and ended up winning a gold medal in the iGEM Competition 2025 for their Hay Fever project... Production: Marine Fretel / <a
                href="/sista_m_paris/" >@sista_m_paris</a> - With interviews from Rikuto Egawa, Linna Sato, Ryota Kamikura, Jacky Man Leuk Yuen... and, as always, an audio twist from yours truly...<a
                href="/explore/tags/igemcompetition/" >#igemcompetition</a> Listen on all podcast platforms or here: https://lnkd.in/eiKea9bS ryotak_115 <a
                href="/igem_hgtokyo/" >@igem_hgtokyo</a></span>,
            caption_short: <span> Podcast Alert: Special Episode of <a href="/ayesdabio/">@ayesdabio</a> The Podcast with HG TOKYO. Be r</span>,
            profiles: [
                {
                    account: "igem_hgtokyo"
                },
                {
                    account: "sista_m_paris"
                },
                {account: "igem_community_board"}
            ],
            date: "June 4"
        },
        {
            post_code: "DY_2_AnNkdG",
            image: "https://static.igem.wiki/teams/6221/wiki/community-board/insta/patras-med-bingo.avif",
            caption: "New iGEM side quest unlocked: BINGO! 🔍 \n \n Pick a square your team relates to, share your moment," +
                " tag us, and challenge another iGEM team to keep the chain going! 🧬",
            caption_short: "New iGEM side quest unlocked: BINGO! 🔍",
            profiles: [
                {
                    account: "patras.med"
                },
                {account: "igem_community_board"}
            ],
            date: "May 31"
        },
        {
            post_code: "DZwr1Zjj_V9",
            image: "https://static.igem.wiki/teams/6221/wiki/community-board/insta/praire.avif",
            caption:"The University of Manitoba Prairie iGEM team is passionately developing a probiotic aiming to help vaginal dysbiosis specifically urinary tract infections (UTIs) in our society.\n" +
                "\n" +
                "Please fill out this survey to help our team determine the general public’s knowledge, perceptions, and openness to new therapies for vaginal dysbiosis in Manitoba. Your answers will help us identify and guide us in shaping better educational resources and innovative prevention strategies using synthetic biology. ",
            caption_short:"The University of Manitoba Prairie iGEM team is passionately",
            profiles: [
                { account:"prairie_igem"},
                {account: "igem_community_board"}
            ],
            date:"June 19"
        }
    ]

    return (
        <div>
            <H1>Title</H1>
            <p>Since iGEM rules do not allow for iframes, here is a instagram like component to display your social
                media posts. Through clicking on the post, the user is forwarded to the respective instagram post.</p>
            <H2>Example</H2>
            <Row>
                {
                    posts.map(post => (
                        <Col md={4}>
                            <InstaPost post={post}/>
                        </Col>
                    ))
                }
            </Row>
            <H2>Usage</H2>
            <TypeScriptCode>
{`import {InstaPost} from "@liliana-sanfilippo/react-wiki-components";

<InstaPost post={post}/>`}
            </TypeScriptCode>
            <p>Data example:</p>
            <TypeScriptCode>
{`const post: InstaPostType = {
        post_code: "DZwr1Zjj_V9",
        image: "https://static.igem.wiki/teams/6221/wiki/community-board/insta/praire.avif",
        caption:"The University of Manitoba Prairie iGEM team is passionately developing a probiotic aiming to help vaginal dysbiosis specifically urinary tract infections (UTIs) in our society.\\n" +
            "\\n" +
            "Please fill out this survey to help our team determine the general public’s knowledge, perceptions, and openness to new therapies for vaginal dysbiosis in Manitoba. Your answers will help us identify and guide us in shaping better educational resources and innovative prevention strategies using synthetic biology. ",
        caption_short:"The University of Manitoba Prairie iGEM team is passionately",
        profiles: [
            { account:"prairie_igem"},
            {account: "igem_community_board"}
        ],
        date:"June 19"
 }
`}
            </TypeScriptCode>
            <p><i>Note: You need to use the actual post code provided by instagram to make the linking work!</i></p>
            <H2>Relevant types</H2>
            <TypeScriptCode>
{`export type InstaPostType = {
    date?: string;
    post_code: string;
    image: string;
    caption: string | React.ReactNode;
    caption_short?: string | React.ReactNode;
    profiles: InstaProfile[];
};`}
            </TypeScriptCode>
            {/*
             <H2>Options</H2>

            <H3>Manual changes</H3>
            */}

            <H2>Source Code</H2>
            <a href={"https://github.com/liliana-sanfilippo/react-wiki-components"}>https://github.com/liliana-sanfilippo/react-wiki-components</a>
        </div>
    )
}



