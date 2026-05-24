import {Folder, PageRef} from "../types/Pages";
import {BlogPage} from "../pages/meta/BlogPage";
import {CurrentProjects} from "../pages/currentProjects";
import {Cv} from "../pages/cv";
import {Bfh} from "../pages/igem/bfh";
import {IgemBielefeldOverview} from "../pages/igem/igemBielefeldOverview";
import {IgemBielefeld} from "../pages/igem/igemBielefeld";
import {StartingAsAdvisor} from "../pages/igem/StartingAsAdvisor";
import {Packages} from "../pages/packages/packages";
import {ReactManager} from "../pages/packages/react-manager";
import {ReactGenerator} from "../pages/packages/react-generator";
import {BibtexParser} from "../pages/packages/bibtex-parser";
import {AuthorNameParser} from "../pages/packages/author-name-parser";
import {CounsellingChatbot} from "../pages/CounsellingChatbot";

export const NavBarContent: (PageRef | Folder)[] = [
    {
        name: "CV", title: "CV", path: "/cv", component: <Cv/>

    }, {
        name: "Posts", title: "Posts", path: "/posts", component: <BlogPage/>

    },
    {
        name: "iGEM", component: <CurrentProjects/>, folder: [
            {
                name: "BFH European MeetUp", title: "BFH European MeetUp", path: "/bfh", component: <Bfh/>

            },
            {
                name: "iGEM Bielefeld", component: <IgemBielefeldOverview/>, folder: [
                    {
                        name: "Overview", title: "iGEM Bielefeld", path: "/"
                    },
                    {
                        name: "iGEM Bielefeld projects",
                        title: "iGEM Bielefeld projects",
                        path: "/projects",
                        component: <IgemBielefeld/>
                    },
                    {
                        name: "For advisors",
                        title: "For advisors",
                        path: "/for-advisors",
                        component: <StartingAsAdvisor/>
                    }
                ]

            },
        ]
    },
    {
        name: "Packages", component: <Packages/>, folder: [
            {
                name: "React Reference Manager",
                title: "React Reference Manager",
                path: "/react-bibtex-reference-manager",
                component: <ReactManager/>

            },
            {
                name: "React Reference Generator",
                title: "React Reference Generator",
                path: "/react-bibtex-reference-generator",
                component: <ReactGenerator/>

            },
            {
                name: "Typescript BibteX Parser",
                title: "Typescript BibteX Parser",
                path: "/bibtex-ts-parser",
                component: <BibtexParser/>

            },
            {
                name: "Typescript Name Parser",
                title: "Typescript Name Parser",
                path: "/author-name-parser",
                component: <AuthorNameParser/>

            },
        ]
    },
    {
        name: "Intelligent Counselling System",
        title: "Intelligent Counselling System",
        path: "/intelligent-counselling-system",
        component: <CounsellingChatbot/>

    }
    /*
    {
        name: "Project Archive", component: <CurrentProjects/>, folder: [


        ]
    }
    */
]

