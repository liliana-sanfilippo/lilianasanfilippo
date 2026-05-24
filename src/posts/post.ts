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
import HannoverMesse2026, {metaHannoverMesse2026} from "./under_construction/hannover-messe-2026";

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
    }

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
            ...metazifModelsOfChange, MDXComponent: zifModelsOfChange
        }, {
            ...metajamboree2025, MDXComponent: jamboree2025,
        }, {
            ...metabfh2025, MDXComponent: bfh2025
        },{
            ...metamuensterMeetup2025, MDXComponent: meetupMuenster2025
        }, {
            ...metaCitationManagerFirstsTests, MDXComponent: CitationManagerFirstsTests
        }, {
            ...metaCellective, MDXComponent: Cellective
        }, {
            ...metaLexartes, MDXComponent: Lexartes
        }, {
            ...metaAidareWebsiteLaunch, MDXComponent: AidareWebsiteLaunch
        }, {
            ...metaMeetupEindhoven2025, MDXComponent: MeetupEindhoven2025
        }, {
            ...metaPrecysePaper, MDXComponent: PrecysePaper
        }, {
            ...metaRoxenTraining,
            MDXComponent: RoxenTraining
        {
            ...metaWikiGuide1, MDXComponent: WikiGuide1
        }, {
            ...metaSailSpringSchool, MDXComponent: SailSpringSchool
        }, {
            ...metaJamboreePrep2024, MDXComponent: JamboreePrep2024
        }, {
            ...metaEegHackathon, MDXComponent: SailEegHackathon
        }, {
            ...metaIgemHomecoming25, MDXComponent: IgemHomecoming25
        }, {
            ...metawiardaBlogAidare, MDXComponent: aidareWiardaBlog
        },

        */]