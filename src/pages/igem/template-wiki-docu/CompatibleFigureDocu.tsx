import React from "react";
import {H1, H2, H3} from "../../../components/other/H2";
import {TypeScriptCode} from "../../../components/TypeScriptCode";
import {ImageExampleCarousel} from "../../../components/Carousels/ImageExampleCarousel";
import {figure_automatic, part_table_examples} from "../../../data/component_examples";
import { Figure } from "@liliana-sanfilippo/react-wiki-components";


export function CompatibleFigureDocu() {
    const pictures = [{
        link: "https://static.igem.wiki/teams/6221/wiki/community-board/meetup-pictures/cb-duesseldorf-people.avif",
        alttext: "Alternative text",
        description: "Description text"
    }]
    const pictures_t = [{
        link: "https://static.igem.wiki/teams/5833/teamlogos/cellective-slogan-erweitert-offblack.webp",
        alttext: "Alternative text",
        description: "Description text"
    }]
    const pictures_m = [
        {
            link: "https://static.igem.wiki/teams/6221/wiki/community-board/meetup-pictures/cb-duesseldorf-people.avif",
            alttext: "Alternative text",
            description: "Description text"
        }, {
            link: "https://static.igem.wiki/teams/6221/wiki/community-board/meetup-pictures/cb-duesseldorf-people.avif",
            alttext: "Alternative text",
            description: "Description text"
        }]

    return (
        <div>
            <H1>Title</H1>
            <p>Figure that can be used in the PageEnvironment that allows for automatic numbering of figures. <b>Must be used in PageEnvironment!</b></p>
            <p> <i>Note: there is no figure environment on this example page, therefore there are no numbers in the examples.</i> </p>
            <H2>Example</H2>
            <ImageExampleCarousel
                examples={figure_automatic}
            />
            <H2>Usage</H2>
<p>The Figure component needs to be in the PageEnvironment. Like this: </p>
            <TypeScriptCode>
{`import {PageEnvironment, Figure} from "@liliana-sanfilippo/react-wiki-components";

 <PageEnvironment>
   ...
    <Figure ... />
   ...
</PageEnvironment>
`}
            </TypeScriptCode>
            <p>There are multiple ways to use the figure component. You can input one or multiple pictures, but they need to be a list. For example:</p>
            <TypeScriptCode>
{`<Figure
    pictures={
        [{
            link: "https://static.igem.wiki/teams/6221/wiki/community-board/meetup-pictures/cb-duesseldorf-people.avif",
            alttext: "Alternative text",
            description: "Description text"
        }]
}/>
`}
            </TypeScriptCode>
            <p>You can also make the list external:</p>
            <TypeScriptCode>
{`const pictures =  [{
            link: "https://static.igem.wiki/teams/6221/wiki/community-board/meetup-pictures/cb-duesseldorf-people.avif",
            alttext: "Alternative text",
            description: "Description text"
        }]
  
    ...
<Figure pictures={pictures}/>
`}
            </TypeScriptCode>
            <H2>Relevant types</H2>
            <p>Pictures need all three fields filled:</p>
<TypeScriptCode>
    {`export type PictureInfos = {
        link: string;
        alttext: string;
        description: React.ReactNode | string;
    };
`}
</TypeScriptCode>
            <p>The figure itself neeeds the pictures. A background color and further classnames are optional.</p>
            <TypeScriptCode>
{`export type FigureProps = {
    pictures: PictureInfos[];
    bg?: string;
    className?: string;
};
`}
            </TypeScriptCode>

            <H2>Options</H2>

            <H3>With background color (relevant for transparent backgrounds on pictures)</H3>
<TypeScriptCode>
{`<Figure
    bg={"black"}
    pictures={pictures}
 />
`}
</TypeScriptCode>
            <Figure
                bg={"black"}
                className={"mb-3"}
                pictures={pictures_t}/>



            <H3>With additional css classes</H3>

            <TypeScriptCode>

{`<Figure
    className={"border-black border-2"}
    pictures={pictures}
/>
`}
            </TypeScriptCode>
            <Figure
                pictures={pictures}/>
            <H3>With multiple pictures</H3>
            <TypeScriptCode>
{`<Figure pictures={pictures} />`}
            </TypeScriptCode>
            <Figure
                pictures={pictures_m}/>


            <H2>Source Code</H2>
            <a href={"https://github.com/liliana-sanfilippo/react-wiki-components"}>https://github.com/liliana-sanfilippo/react-wiki-components</a>
        </div>
    )
}



