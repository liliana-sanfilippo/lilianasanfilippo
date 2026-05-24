import {
    FaAngular, FaBalanceScale,
    FaClipboard, FaFlask,
    FaHtml5,
    FaJava, FaJenkins,
    FaNodeJs,
    FaPython,
    FaReact,
    FaRegCompass,
    FaVuejs
} from "react-icons/fa";
import {TbBrandVscode, TbDna} from "react-icons/tb";
import {GrMysql, GrStakeholder} from "react-icons/gr";
import {
    SiApachemaven,
    SiGithubactions,
    SiIntellijidea, SiLatex, SiNotion, SiNpm, SiSass,
    SiSpringboot,
    SiTailwindcss,
    SiWebpack,
    SiJira, SiMicrosoftpowerpoint
} from "react-icons/si";
import {BootstrapFill, Css, Github, Gitlab, Javascript, Typescript, Ubuntu} from "react-bootstrap-icons";
import {ReactElement} from "react";
import {BsMicrosoftTeams} from "react-icons/bs";
import {GiBrain, GiTreeBranch} from "react-icons/gi";
import {BiNetworkChart, BiLogoPhp} from "react-icons/bi";

export const ReactIcon = () => <span className={"icon icon-react"}> <FaReact/> </span>

export const AngularIcon = () => <span className={"icon icon-angular"}> <FaAngular/> </span>

export const HtmlIcon = () => <span className={"icon icon-html"}> <FaHtml5/> </span>

export const PythonIcon = () => <span className={"icon icon-python"}> <FaPython/> </span>

export const JavaIcon = () => <span className={"icon icon-java"}> <FaJava/> </span>

export const VscIcon = () => <span className={"icon icon-vsc"}> <TbBrandVscode/> </span>

export const IntellijIcon = () => <span className={"icon icon-intellij"}> <SiIntellijidea/> </span>

export const CounsellingIcon = () => <span className={"icon icon-counselling"}> <FaRegCompass/> </span>

export const TailwindIcon = () => <span className={"icon icon-tailwind"}> <SiTailwindcss/> </span>

export const ClipboardIcon = () => <span className={"icon icon-clipboard"}> <FaClipboard/> </span>

export const StakeholderIcon = () => <span className={"icon icon-stakeholder"}> <GrStakeholder/> </span>

export const VueIcon = () => <span className={"icon icon-vue"}> <FaVuejs/> </span>

export const NodeIcon = () => <span className={"icon icon-node"}> <FaNodeJs/> </span>

export const SpringbootIcon = () => <span className={"icon icon-springboot"}> <SiSpringboot/> </span>

export const TeamsIcon = () => <span className={"icon icon-teams"}><BsMicrosoftTeams/></span>

export const GitHubActions = () => <span className={"icon icon-githubactions"}><SiGithubactions/></span>

export const WebpackIcon = () => <span className={"icon icon-webpack"}><SiWebpack/></span>

export const MavenIcon = () => <span className={"icon icon-maven"}><SiApachemaven/></span>

export const MySQLIcon = () => <span className={"icon icon-mysql"}><GrMysql/></span>

export const JenkinsIcon = () => <span className={"icon icon-jenkins"}><FaJenkins/></span>

export const PowerPointIcon = () => <span className={"icon icon-powerpoint"}><SiMicrosoftpowerpoint/></span>

export const NotionIcon = () => <span className={"icon icon-notion"}><SiNotion/></span>

export const SassIcon = () => <span className={"icon icon-sass"}><SiSass/></span>

export const LatexIcon = () => <span className={"icon icon-latex"}><SiLatex/></span>

export const NpmIcon = () => <span className={"icon icon-npm"}><SiNpm/></span>

export const AIEthicsIcon = () => <span className={"icon icon-ai-ethics"}><FaBalanceScale/></span>

export const MachineLearningIcon = () => <span className={"icon icon-ml"}><GiBrain/></span>

export const DeepLearningIcon = () => <span className={"icon icon-deep-learning"}><BiNetworkChart/></span>

export const BioinformaticsIcon = () => <span className={"icon icon-bioinformatics"}><TbDna/></span>

export const SyntheticBiologyIcon = () => <span className={"icon icon-synthetic-bio"}><FaFlask/></span>

export const PhylogeneticsIcon = () => <span className={"icon icon-phylogenetics"}><GiTreeBranch/></span>


export const PHPIcon = () => <span className={"icon icon-php"}><BiLogoPhp/></span>

export const JiraIcon = () => <span className={"icon icon-jira"}><SiJira/></span>

//export const AntlrIcon = () => <span className={"icon icon-antlr"}><SiAntlr/></span>


// AnTLR, Latex, data curation, roxen, science communication, team work, team coordination, agile development, open
// source


// Teams, Powerpoint, notion, jsx?, npm, sass, android studio, sql, zotero / citavi, scientific research

// legal tech, pytorch, scikitlearn, machine learning


export const iconMap: Record<string, ReactElement> = {
    typescript: <Typescript/>,
    javascript: <Javascript/>,
    python: <PythonIcon/>,
    java: <JavaIcon/>,
    css: <Css/>,
    html: <HtmlIcon/>,
    react: <ReactIcon/>,
    angular: <AngularIcon/>,
    vue: <VueIcon/>,
    springboot: <SpringbootIcon/>,
    bootstrap: <BootstrapFill/>,
    tailwind: <TailwindIcon/>,
    github: <Github/>,
    gitlab: <Gitlab/>,
    vsc: <VscIcon/>,
    intellij: <IntellijIcon/>,
    ubuntu: <Ubuntu/>,
    counselling: <CounsellingIcon/>,
    teams: <TeamsIcon/>,
    githubactions: <GitHubActions/>,
    webpack: <WebpackIcon/>,
    maven: <MavenIcon/>,
    mysql: <MySQLIcon/>,
    jenkins: <JenkinsIcon/>,
    powerpoint: <PowerPointIcon/>,
    notion: <NotionIcon/>,
    sass: <SassIcon/>,
    latex: <LatexIcon/>,
    npm: <NpmIcon/>,
    node: <NodeIcon/>,
    php: <PHPIcon/>,
    jira: <JiraIcon/>,
    'ai-ethics': <AIEthicsIcon/>,
    'machine-learning': <MachineLearningIcon/>,
    'ml': <MachineLearningIcon/>,
    'deep-learning': <DeepLearningIcon/>,
    'bioinformatics': <BioinformaticsIcon/>,
    'synthetic-biology': <SyntheticBiologyIcon/>,
    'phylogenetics': <PhylogeneticsIcon/>,
};