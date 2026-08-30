import {Post} from "./post_interface";
import uniBlogPrecyse1, {metauniBlogPrecyse1} from "./finished/uni-blog-precyse-1";
import uniBlogPrecyse2, {metauniBlogPrecyse2} from "./finished/uni-blog-precyse-2";
import uniBlogCellective1, {metauniBlogCellective1} from "./finished/uni-blog-cellective-1";
import uniBlogCellective2, {metauniBlogCellective2} from "./finished/uni-blog-cellective-2";
import zifBlogAidare2, {metazifBlogAidare2} from "./finished/zif-post-aidare2";
import Biteach2024, {metaBiteach2024} from "./finished/biteach-2024";
import IgemHomecoming24, {metaIgemHomecoming24} from "./finished/igem-homecoming-24";
import bfh2024, {metabfh2024} from "./finished/bfh2024";
import meetupMuenster2024, {metamuensterMeetup2024} from "./finished/meetup-muenster-2024";
import HannoverMesse2026, {metaHannoverMesse2026} from "./finished/hannover-messe-2026";
import Lexartes, {metaLexartes} from "./okayish/lexartes";
import PrecysePaper, { metaPrecysePaper } from "./under_construction/precyse-paper";
import SailEegHackathon, {metaEegHackathon} from "./okayish/sail-eeg-hackathon";
import {metaSailSpringSchool, SailSpringSchool} from "./under_construction/sail-spring-school";
import {metazifModelsOfChange, zifModelsOfChange} from "./under_construction/zif-models-of-change";
import AidareWebsiteLaunch, {metaAidareWebsiteLaunch} from "./under_construction/aidare-website-launch";

export const posts: Post[] = [{
    ...metauniBlogPrecyse1, MDXComponent: uniBlogPrecyse1,
}, {
    ...metauniBlogPrecyse2, MDXComponent: uniBlogPrecyse2,
}, {
    ...metauniBlogCellective1, MDXComponent: uniBlogCellective1
}, {
    ...metauniBlogCellective2, MDXComponent: uniBlogCellective2
}, {
    ...metazifBlogAidare2, MDXComponent: zifBlogAidare2,
}, {
    ...metaBiteach2024, MDXComponent: Biteach2024
},
    {
        ...metaIgemHomecoming24, MDXComponent: IgemHomecoming24
    },
    {
        ...metabfh2024, MDXComponent: bfh2024
    },
    {
        ...metamuensterMeetup2024, MDXComponent: meetupMuenster2024
    },
    {
        ...metaHannoverMesse2026, MDXComponent: HannoverMesse2026
    },
    {
        ...metaLexartes, MDXComponent: Lexartes
    },
    {
        ...metaEegHackathon, MDXComponent: SailEegHackathon
    },

/*


    {
        ...metaPrecysePaper, MDXComponent: PrecysePaper
    },

    {
        ...metaSailSpringSchool, MDXComponent: SailSpringSchool
    },
    {
        ...metazifModelsOfChange, MDXComponent: zifModelsOfChange
    },
    {
        ...metaAidareWebsiteLaunch, MDXComponent: AidareWebsiteLaunch
    },

 */

    /*
     {
        ...metajamboree2024, MDXComponent: jamboree2024,
    },
        {
        ...metabfh2026, MDXComponent: bfh2026
    },
    {
        ...metaHeistBrick2026, MDXComponent: heistBrick2026
    },
    {
        ...metaCommunityBoard, MDXComponent: communityBoard
    },
       {
        ...metamuensterMeetup2026, MDXComponent: meetupMuenster2026
    },
    {
        ...metaMeetupEindhoven2026, MDXComponent: MeetupEindhoven2026
    },
    {
        ...metaIgemaiethics, MDXComponent: Igemaiethics
    }




      {
            ...metajamboree2025, MDXComponent: jamboree2025,
        }, {
            ...metabfh2025, MDXComponent: bfh2025
        },{
            ...metamuensterMeetup2025, MDXComponent: meetupMuenster2025
        }, {
            ...metaCitationManagerFirstsTests, MDXComponent: CitationManagerFirstsTests
        }, {
            ...metaCellective, MDXComponent: Cellective
        },  {
            ...metaMeetupEindhoven2025, MDXComponent: MeetupEindhoven2025
        }, {
            ...metaRoxenTraining,
            MDXComponent: RoxenTraining
        {
            ...metaWikiGuide1, MDXComponent: WikiGuide1
        }, {
            ...metaJamboreePrep2024, MDXComponent: JamboreePrep2024
        },  {
            ...metaIgemHomecoming25, MDXComponent: IgemHomecoming25
        }, {
            ...metawiardaBlogAidare, MDXComponent: aidareWiardaBlog
        },

        */]