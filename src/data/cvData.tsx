import {CVItemProps} from "../components/other/cvItem";
import {Link} from "react-router-dom";
import {PublicationInfo} from "../components/other/PublicationInfo";
import {cfpaper} from "./publications";

export const workEx: CVItemProps[] = [
    {
        date: "Mar. 2026 - today",
        stelle: "Full Stack Programmer",
        desc: "",
        inst: "Lexmea",
        eventkey: "lexmea",
        body: (
            <>
                <p><b>Associated with:</b></p>
                <ul className={"list-disc mb-5"}>
                    <li><a href={"#awards"}>2nd place for the software project LexArtes</a></li>
                </ul>
            </>
        ),
        skills: [
            'typescript',
            'javascript',
            'php',
            'css',
            'html',
            'tailwind',
            'vue',
            'github',
            'vsc',
            'jira'
        ]
    },
    {
        date: "Sep. 2023 - today",
        stelle: "Student assistant",
        desc: "for the working group Knowledge Representation and Machine Learning",
        inst: "Universität Bielefeld",
        eventkey: "0",
        body: (
            <>
                <p>Development of an interactive counselling system that is available around the clock to students
                    and prospective students at the Technical Faculty, capable of answering common questions.</p>
                <p><b>Associated with:</b></p>
                <ul className={"list-disc mb-5"}>
                    <li><Link to={process.env.REACT_APP_COUNSELLING_SYSTEM_PATH!}>An Intelligent Counselling
                        System for Student Counselling</Link></li>
                </ul>
            </>
        ),
        skills: [
            'typescript',
            'javascript',
            'python',
            'css',
            'html',
            'bootstrap',
            'angular',
            'gitlab',
            'vsc',
            "intellij",
            'counselling'
        ]
    }
]

export const edu: CVItemProps[] = [
    {
        date: "Oct. 2022 - today",
        stelle: "Bachelor Studies",
        desc: "Bioinformatics and Genome Research",
        inst: "Universität Bielefeld",
        eventkey: "12",
        body: (
            <>
                <p><b>Associated with:</b></p>
                <ul className={"list-disc mb-5"}>
                    <li><a href={"#awards"}>2nd place for the software project LexArtes</a></li>
                </ul>
            </>
        ),
        skills: [
            'typescript',
            'javascript',
            'python',
            'java',
            'vue',
            'html',
            'css',
            'bootstrap',
            'springboot',
            'vsc',
            'intellij',
            'github',
            'ubuntu',
            'mysql',
            'jenkins',
            'latex',
            "bioinformatics",
            'phylogenetics'
        ]
    }
]

export const awards: CVItemProps[] = [
    {
        date: "Oct. 2025",
        stelle: "Silver Medal",
        desc: "for the iGEM project Cellective",
        inst: "iGEM Foundation",
        eventkey: "11",
        body: (
            <>
                <p>
                    Cellective is a riboswitch-based therapeutic platform that selectively targets cancer cells by
                    detecting specific microRNAs and mRNAs, subsequently translating a cellular kill system. This
                    platform is intended to be further developed specifically for the treatment of triple-negative
                    breast cancer (TNBC), a particularly aggressive and hard-to-treat form of breast cancer.
                    The selective detection of cancer-specific marker RNAs using the engineered riboswitch RNAs
                    enables a highly specific, minimally invasive therapy that spares healthy cells and is only
                    activated in tumor-relevant contexts. The modular design allows for flexible adaptation to
                    different tumor types and RNA profiles, allowing personalized medicine. We successfully
                    engineered this therapeutic system and confirmed its functionality.
                </p>
                <p><b>More information:</b></p>
                <ul className={"list-disc mb-5"}>
                    <li><a href={"https://2025.igem.wiki/bielefeld-cebitec/description"}>Cellective Wiki</a></li>
                </ul>
                <p><b>Associated with:</b></p>
                <ul className={"list-disc mb-5"}>
                    <li><a href={"#volunteering"}>Volunteering "Team Advisor"</a></li>
                    <li><Link to={process.env.REACT_APP_IGEM_BIELEFELD_PATH!}>iGEM Bielefeld</Link></li>
                </ul>
            </>
        ),
        skills: [
            'typescript',
            'javascript',
            'css',
            'html',
            'bootstrap',
            'react',
            'gitlab',
            'intellij',
            'teams'
        ]
    },
    {
        date: "Oct. 2025",
        stelle: "2nd place",
        desc: "for the software project LexArtes",
        inst: "LexMea",
        eventkey: "10",
        id: "lexartes",
        body: <>
            <p>
                <i>
                    "LexArtes is a modern web app designed to help law students prepare for exams. Users select sets of
                    flashcards, study using the flip or reveal mode (spaced repetition), track their progress via the
                    dashboard, and benefit from content on the LexMea platform."
                </i>
            </p>
        </>,
        skills: [
            'typescript',
            'java',
            'css',
            'html',
            'bootstrap',
            'tailwind',
            'vue',
            'springboot',
            'github',
            'intellij',
            'jenkins'
        ]
    },
    {
        date: "Oct. 2024",
        stelle: "Best Integrated Human Practices, Safety and Security, Best Presentation and Gold Medal",
        desc: "for the iGEM project PreCyse",
        inst: "iGEM Foundation",
        eventkey: "9",
        body: (
            <>
                <p>
                    PreCyse is a next-generation Prime Editing technology, an innovative gene therapy approach for
                    Cystic Fibrosis (CF) specifically targeting the most common mutation F508del of the CFTR gene.
                    Cystic Fibrosis is a severe disorder that primarily affects the lungs and for which only
                    short-term symptomatic treatments exist. PreCyse aims to provide long-term relief by delivering
                    a small genetic payload with speed and precision. Our approach integrates PrimeGuide, a highly
                    optimized Prime Editing system, with AirBuddy, a novel lipid nanoparticle (LNP) delivery
                    platform. The SORT LNPs used in AirBuddy are optimized for pulmonary delivery, offering precise
                    organ targeting and structural stability throughout the inhalation process. Small payload size
                    is key for effective delivery and compatibility with viral vectors, which have a limited
                    capacity. PrimeGuide embodies this vision by utilizing a smaller, more efficient editing
                    complex. Current treatments often require daily administration whereas PreCyse is currently
                    developed as a monthly applied therapy. In addition, Prime Editing holds the promise to offer a
                    causal cure, when mutations are corrected in stem cells. Our approach aims to reduce medication
                    frequency while improving patient outcomes. By lowering costs and improving accessibility,
                    PreCyse aspires to offer an advanced and user-friendly cure for Cystic Fibrosis.
                </p>
                <p><b>More information:</b></p>
                <ul className={"list-disc mb-5"}>
                    <li><a href={"https://2024.igem.wiki/bielefeld-cebitec/description"}>PreCyse Wiki</a></li>
                </ul>
                <p><b>Associated with:</b></p>
                <ul className={"list-disc mb-5"}>
                    <li><a href={"#publications"}>Publication "Towards effective cystic fibrosis gene therapy by
                        optimizing prime editing and pulmonary-targeted LNPs"</a></li>
                    <li><a href={"#volunteering"}>Volunteering "Head of Web Developement"</a></li>
                    <li><Link to={process.env.REACT_APP_IGEM_BIELEFELD_PATH!}>iGEM Bielefeld</Link></li>
                </ul>
            </>
        ),
        skills: [
            'typescript',
            'javascript',
            'css',
            'html',
            'bootstrap',
            'react',
            'gitlab',
            'intellij',
            'teams'
        ]
    },
]


export const functions: CVItemProps[] = [
    {
        date: "May 2025",
        stelle: "",
        desc: "Participated in Workshop on AI and Autonomy in Higher Education",
        inst: "Center for Interdisciplinary Research",
        eventkey: "8",
        body: <></>,
        skills: [
            "ai-ethics"
        ]
    },
    {
        date: "May 2025",
        stelle: "Frontend Developer and Photographer",
        inst: "BFH European MeetUp Conference 2025",
        eventkey: "7",
        body: <></>,
        skills: [
            "typescript",
            "css",
            "bootstrap",
            "react",
            "gitlab",
            "vsc"
        ]
    }
]

export const publications: CVItemProps[] = [
    {
        date: "Dec. 2025",
        stelle: "Towards effective cystic fibrosis gene therapy by optimizing prime editing and pulmonary-targeted LNPs",
        inst: "Frontiers in System Biology",
        eventkey: "6",
        body: (
            <>
                <PublicationInfo
                    bibtex={cfpaper}
                    link={"https://doi.org/10.3389/fsysb.2025.1603749"}
                    abstract={"Cystic fibrosis (CF) is the most prevalent inherited disease. Inactivating mutations in the Cystic Fibrosis Transmembrane Conductance Regulator (CFTR) gene lead to the accumulation of viscous mucus and subsequent respiratory complications. This study optimized a prime editing (PE) approach to correct CFTR mutations focusing on the F508del mutation. Prime editing allowed to introduce missing bases without double-strand breaks using a Cas9-nickase fused with a reverse transcriptase in combination with a prime editing guide RNA (pegRNA). Various self-designed pegRNAs were compared. For delivery, various lipid nanoparticles (LNP) were tested, which were optimized for stability and lung cells targeting based on lipid selection or chitosan complexion. A fluorescence reporter system, pPEAR_CFTR, was developed mimicking F508del for validation. The five pegRNAs yielding the highest efficiency were used for genomic CFTR correction in a CF bronchial cell line. Nanopore sequencing of genomic DNA revealed approximate 5% edited reads. These results highlight the promise of prime editing-LNP systems for precise and lung-specific gene correction, paving the way for novel therapies in cystic fibrosis and other pulmonary genetic disorders."}
                />
                <p><b>Associated with:</b></p>
                <ul className={"list-disc"}>
                    <li><Link to={process.env.REACT_APP_IGEM_BIELEFELD_PATH!}>iGEM Bielefeld-CeBiTec - PreCyse</Link></li>
                </ul>
            </>
        ),
        skills: []
    }
]

export const volunteering: CVItemProps[] = [
    {
        date: "Jun. 2025 - today",
        stelle: "Committee Member",
        inst: "BFH European MeetUp",
        eventkey: "14",
        body: <></>,
        skills: []
    },
    {
        date: "Dec. 2024 - Dec. 2025",
        stelle: "Team Advisor",
        inst: "iGem Bielefeld-Cebitec",
        eventkey: "3",
        body: <></>,
        skills: [
            'typescript',
            'javascript',
            'css',
            'html',
            'bootstrap',
            'react',
            'gitlab',
            'intellij',
            'teams']
    },
    {
        date: "Feb. 2024 - Dec. 2024",
        stelle: "Head of Web Developement",
        inst: "iGem Bielefeld-Cebitec",
        eventkey: "2",
        body: <></>,
        skills: [
            'typescript',
            'javascript',
            'css',
            'html',
            'bootstrap',
            'react',
            'gitlab',
            'intellij',
            'teams']
    },
    {
        date: "Sept. 2023 - today",
        stelle: "Student Counselling",
        desc: "at the technical faculty",
        inst: "Universität Bielefeld",
        eventkey: "1",
        body: <></>,
        skills: ['counselling']
    },
    {
        date: "Apr. 2023 - Aug. 2023",
        stelle: "Krötenwanderung",
        inst: "Bielefeld",
        eventkey: "4",
        body: <></>,
        skills: []
    },
    {
        date: "Aug. 2021 - Jan. 2022",
        stelle: "Integration work",
        inst: "Welcome House Braunschweig",
        eventkey: "5",
        body: <></>,
        skills: []
    }

]

export const software: CVItemProps[] = [
    {
        date: "Aug 2025+",
        stelle: "React Citation Manager",
        inst: "(web package)",
        eventkey: "13",
        body: <>
            <p>React Component for Managing references. Automatically generates Citations based on the ids used with
                Citation Links in the text of a page.</p>
            <p>
                It provides proper and consistent formatting of references (with visual warnings if information is missing) And the auther names are formatted consistently! It even recognises particles such as "van" to be last names instead of just taking the last word as the last name and having everything else as the first names..
                No need to keep track in which order references are cited in the text, the manager is able to infer the order of citations and generates the list accordingly.
                This makes it very easy to add references later on as the order adjusts automatically.
                It is not necessary to number the citations in the text as that happens automatically, too.
            </p>
        </>,
        skills: [
            "typescript",
            "react",
            "github",
            "githubactions",
            "intellij",
            "npm",
            "webpack"
        ]
    }
]


