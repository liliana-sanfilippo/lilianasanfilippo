import Select from 'react-select';
import React from 'react';
import "../../componentStyling/Filter.css"
import {Col, Row} from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export interface FilterActionProps {
    filtervalues: FilterAction[]
}

export interface FilterAction {
    value: string,
    label: string
}

interface FilterActionState {
    selectedOption: FilterAction[] | null;
}



export function filterMultiSelection(arr: Array<FilterAction>) {
    const nono = document.getElementById("nono");
    if (nono) {
        nono.className = "noshow";
    }

    const filterableElements = document.getElementsByClassName("filterable");

    // Remove "show" class from all elements
    for (let i = 0; i < filterableElements.length; i++) {
        const el = filterableElements[i];
        w3RemoveClass(el, "show");
    }

    console.log("Begin");

    // Apply filter criteria
    for (let i = 0; i < filterableElements.length; i++) {
        const el = filterableElements[i];
        let shouldShow = true;

        for (const entry of arr) {
            console.log(`entry: ${entry.value}`);
            if (!el.classList.contains(entry.value)) {
                shouldShow = false;
                break;
            }
        }

        console.log(`shouldShow: ${shouldShow}`);
        if (shouldShow) {
            w3AddClass(el, "show");
        }
    }

    // Check if any element is shown
    const shownElements = document.getElementsByClassName("show");
    if (shownElements.length < 1 && nono) {
        console.log(shownElements.length);
        nono.className = "show";
    }
}



function w3AddClass(element: Element, name: string) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {element.className += " " + arr2[i];}
    }
}

function w3RemoveClass(element: Element, name: string) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}




export class Filter extends React.Component<FilterActionProps, FilterActionState> {
    state: FilterActionState = {
        selectedOption: null,
    };
    handleChange = (selectedOption: any) => {

        this.setState({ selectedOption }, () =>
            console.log(`Option selected:`, this.state.selectedOption)

        );
        filterMultiSelection(selectedOption)
    };
    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                isMulti
                defaultValue={{value: "all", label: "Show all"}}
                options={this.props.filtervalues}
                className="basic-multi-select"
                classNamePrefix="select"
            />
        );
    }
}

export interface FilterButtonGroupProps {
    title: string;
    options: FilterAction[];
    selectedValues: FilterAction[];
    onChange: (value: FilterAction) => void;
}


const FilterButtonGroup: React.FC<FilterButtonGroupProps> = ({
                                                                 options,
    title,
                                                                 selectedValues,
                                                                 onChange
                                                             }) => {
    const isSelected = (value: string) =>
        selectedValues.some(item => item.value === value);

    return (
           <div>
<h5 className={"mt-3"}>{title}</h5>
               <div className="button-group mt-4">
                   {options.map(option => (
                       <button
                           key={option.value}
                           className={`filter-button ${isSelected(option.value) ? 'active' : ''}`}
                           onClick={() => onChange(option)}
                       >
                          {option.label}
                       </button>
                   ))}
               </div>
           </div>
    );
};


interface MultiCategoryFilterProps {
    informatikOptions: FilterAction[];
    softSkillsOptions: FilterAction[];
}

interface MultiCategoryFilterState {
    selectedOptions: FilterAction[];
}


export class MultiCategoryFilter extends React.Component<MultiCategoryFilterProps, MultiCategoryFilterState> {
    state: MultiCategoryFilterState = {
        selectedOptions: [],
    };

    toggleFilter = (option: FilterAction) => {
        const { selectedOptions } = this.state;
        const isAlreadySelected = selectedOptions.some(
            item => item.value === option.value
        );

        let newSelection: FilterAction[];

        if (isAlreadySelected) {
            // Entfernen
            newSelection = selectedOptions.filter(
                item => item.value !== option.value
            );
        } else {
            // Hinzufügen
            newSelection = [...selectedOptions, option];
        }

        this.setState({ selectedOptions: newSelection }, () => {
            console.log('Selected options:', this.state.selectedOptions);
            filterMultiSelection(newSelection);
        });
    };
    clearAllFilters = () => {
        this.setState({ selectedOptions: [] }, () => {
            filterMultiSelection([]);
        });
    };

    render() {
        const { informatikOptions, softSkillsOptions } = this.props;
        const { selectedOptions } = this.state;

        return (
            <div className="multi-category-filter">
                <Tabs>
                    <Tab eventKey="0" title="Tool & Technology">
                       <Row>
                           <Col>
                               <FilterButtonGroup
                                   title={"Programming Languages"}
                                   options={programmingLanguages}
                                   selectedValues={selectedOptions}
                                   onChange={this.toggleFilter}
                               />
                           </Col>
                           <Col>
                               <FilterButtonGroup
                                   title={"Web Development"}
                                   options={webDevelopment}
                                   selectedValues={selectedOptions}
                                   onChange={this.toggleFilter}
                               />
                           </Col>
                           <Col>
                               <FilterButtonGroup
                                   title={"Development Tools"}
                                   options={devTools}
                                   selectedValues={selectedOptions}
                                   onChange={this.toggleFilter}
                               />
                           </Col>
                           <Col>
                               <FilterButtonGroup
                                   title={"Infrastructure"}
                                   options={infrastructure}
                                   selectedValues={selectedOptions}
                                   onChange={this.toggleFilter}
                               />
                           </Col>
                       </Row>
                    </Tab>
                    <Tab eventKey="1"  title="Domain Knowledge">
                       <Row>
                           <Col>
                               <FilterButtonGroup
                                   title={"AI"}
                                   options={aiDomain}
                                   selectedValues={selectedOptions}
                                   onChange={this.toggleFilter}
                               />
                           </Col>
                           <Col>
                               <FilterButtonGroup
                                   title={"Bioinformatics"}
                                   options={bioinformaticsDomain}
                                   selectedValues={selectedOptions}
                                   onChange={this.toggleFilter}
                               />
                           </Col>
                       </Row>
                    </Tab>
                    {/* <Tab eventKey="2"  title="Business & Productivity">
                        <Row>
                            <Col>
                                <FilterButtonGroup
                                    title={"Office & Productivity"}
                                    options={officeProductivity}
                                    selectedValues={selectedOptions}
                                    onChange={this.toggleFilter}
                                />
                            </Col>
                            <Col>
                                <FilterButtonGroup
                                    title={"Project Management & Organization"}
                                    options={projectManagement}
                                    selectedValues={selectedOptions}
                                    onChange={this.toggleFilter}
                                />
                            </Col>
                            <Col>
                                <FilterButtonGroup
                                    title={"Documentation & Writing"}
                                    options={documentation}
                                    selectedValues={selectedOptions}
                                    onChange={this.toggleFilter}
                                />
                            </Col>
                            <Col>
                                <FilterButtonGroup
                                    title={"Data Analysis & Visualization"}
                                    options={dataAnalysis}
                                    selectedValues={selectedOptions}
                                    onChange={this.toggleFilter}
                                />
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="3"  title="Soft Skills">
                        <FilterButtonGroup
                            title={"Soft Skills"}
                            options={softSkillsOptions}
                            selectedValues={selectedOptions}
                            onChange={this.toggleFilter}
                        />
                    </Tab>*/}
                </Tabs>

                {selectedOptions.length > 0 && (
                    <button
                        onClick={this.clearAllFilters}
                        className="clear-button"
                    >
                        Clear All ({selectedOptions.length})
                    </button>
                )}

            </div>
        );
    }
}

const programmingLanguages: FilterAction[] = [
    { value: 'typescript', label: 'TypeScript' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
//    { value: 'cpp', label: 'C++' },
 //   { value: 'csharp', label: 'C#' },
  //  { value: 'rust', label: 'Rust' },
  //  { value: 'go', label: 'Go' },
];

const infrastructure: FilterAction[] = [
    // Containerization & Orchestration
   // { value: 'docker', label: 'Docker' },
   // { value: 'kubernetes', label: 'Kubernetes' },

    // Operating Systems
    { value: 'ubuntu', label: 'Ubuntu' },
    //{ value: 'linux', label: 'Linux' },

    // Cloud Platforms
    //{ value: 'aws', label: 'AWS' },
    //{ value: 'azure', label: 'Azure' },
    //{ value: 'gcp', label: 'Google Cloud' },

    // Databases
    //{ value: 'postgresql', label: 'PostgreSQL' },
    { value: 'mysql', label: 'MySQL' },
    //{ value: 'mongodb', label: 'MongoDB' },
    //{ value: 'redis', label: 'Redis' },

    // CI/CD
    { value: 'jenkins', label: 'Jenkins' },
   // { value: 'gitlab-ci', label: 'GitLab CI' },
    { value: 'githubactions', label: 'GitHub Actions' },
];

const devTools: FilterAction[] = [
    // Version Control
    //{ value: 'git', label: 'Git' },
    { value: 'github', label: 'GitHub' },
    { value: 'gitlab', label: 'GitLab' },

    // IDEs & Editors
    { value: 'vsc', label: 'VS Code' },
    { value: 'intellij', label: 'IntelliJ' },
    //{ value: 'vim', label: 'Vim' },

    // Build Tools & Package Managers
    { value: 'npm', label: 'npm' },
    { value: 'maven', label: 'Maven' },
   // { value: 'gradle', label: 'Gradle' },
    { value: 'webpack', label: 'Webpack' },

    // Testing
   // { value: 'jest', label: 'Jest' },
   // { value: 'junit', label: 'JUnit' },
];

const webDevelopment: FilterAction[] = [
    // Frontend Frameworks
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'vue', label: 'Vue' },

    // Styling
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'bootstrap', label: 'Bootstrap' },
    { value: 'tailwind', label: 'Tailwind' },
    { value: 'sass', label: 'Sass' },

    // Backend Frameworks
    { value: 'springboot', label: 'Spring Boot' },
    //{ value: 'nodejs', label: 'Node.js' },
    //{ value: 'express', label: 'Express' },
    //{ value: 'django', label: 'Django' },
    //{ value: 'flask', label: 'Flask' },
];



// Unterkategorie: AI & Machine Learning
const aiDomain: FilterAction[] = [
    //{ value: 'machine-learning', label: 'Machine Learning' },
    //{ value: 'deep-learning', label: 'Deep Learning' },
   // { value: 'nlp', label: 'Natural Language Processing' },
    //{ value: 'computer-vision', label: 'Computer Vision' },
    //{ value: 'data-science', label: 'Data Science' },
    { value: 'ai-ethics', label: 'AI Ethics' },
    //{ value: 'pytorch', label: 'PyTorch' },
    //{ value: 'scikit-learn', label: 'Scikit-learn' },
];

// Unterkategorie: Bioinformatics & Genomics
const bioinformaticsDomain: FilterAction[] = [
    { value: 'bioinformatics', label: 'Bioinformatics' },
    //{ value: 'genomics', label: 'Genomics' },
   // { value: 'synthetic-biology', label: 'Synthetic Biology' },
    //{ value: 'gene-editing', label: 'Gene Editing' },
    { value: 'phylogenetics', label: 'Phylogenetics' },
    //{ value: 'systems-biology', label: 'Systems Biology' },
];

// Unterkategorie: Software Engineering
const softwareEngDomain: FilterAction[] = [
    { value: 'software-architecture', label: 'Software Architecture' },
    { value: 'design-patterns', label: 'Design Patterns' },
    { value: 'testing', label: 'Testing & QA' },
    { value: 'devops', label: 'DevOps' },
    { value: 'agile', label: 'Agile Development' },
];

// Unterkategorie: Scientific Computing (optional)
const scientificDomain: FilterAction[] = [
    { value: 'data-analysis', label: 'Data Analysis' },
    { value: 'algorithms', label: 'Algorithms' },
    { value: 'scientific-writing', label: 'Scientific Writing' },
    { value: 'research', label: 'Research Methodology' },
];

const softSkills: FilterAction[] = [
    { value: 'counselling', label: 'Counselling' },
    { value: 'teaching', label: 'Teaching' },
    { value: 'leadership', label: 'Leadership' },
    { value: 'teamwork', label: 'Teamwork' },
    { value: 'project-management', label: 'Project Management' },
];

const officeProductivity: FilterAction[] = [
    // Microsoft Office
    { value: 'excel', label: 'Excel' },
    { value: 'word', label: 'Word' },
    { value: 'powerpoint', label: 'PowerPoint' },
    { value: 'outlook', label: 'Outlook' },

    // Google Workspace
   // { value: 'google-sheets', label: 'Google Sheets' },
    //{ value: 'google-docs', label: 'Google Docs' },
    //{ value: 'google-slides', label: 'Google Slides' },

    // Other
    //{ value: 'libreoffice', label: 'LibreOffice' },
    //{ value: 'onenote', label: 'OneNote' },
];

const communication: FilterAction[] = [
    // Team Communication
    { value: 'teams', label: 'Microsoft Teams' },
    //{ value: 'slack', label: 'Slack' },
    { value: 'discord', label: 'Discord' },
    { value: 'zoom', label: 'Zoom' },
    //{ value: 'skype', label: 'Skype' },

    // Email & Calendar
    //{ value: 'outlook', label: 'Outlook' },
    //{ value: 'gmail', label: 'Gmail' },
];

const projectManagement: FilterAction[] = [
    { value: 'teams', label: 'Microsoft Teams' },
    { value: 'jira', label: 'Jira' },
   // { value: 'trello', label: 'Trello' },
   // { value: 'asana', label: 'Asana' },
    { value: 'notion', label: 'Notion' },
   // { value: 'monday', label: 'Monday.com' },
   // { value: 'confluence', label: 'Confluence' },
    { value: 'miro', label: 'Miro' },
];

const designTools: FilterAction[] = [
    // UI/UX Design
    { value: 'figma', label: 'Figma' },
   // { value: 'sketch', label: 'Sketch' },
   // { value: 'adobe-xd', label: 'Adobe XD' },

    // Graphic Design
   // { value: 'photoshop', label: 'Photoshop' },
   // { value: 'illustrator', label: 'Illustrator' },
    { value: 'inkscape', label: 'Inkscape' },
    //{ value: 'gimp', label: 'GIMP' },

    // Video/Photo
   // { value: 'premiere', label: 'Premiere Pro' },
   // { value: 'lightroom', label: 'Lightroom' },
    { value: 'canva', label: 'Canva' },
];


const documentation: FilterAction[] = [
    { value: 'latex', label: 'LaTeX' },
    { value: 'markdown', label: 'Markdown' },
    //{ value: 'confluence', label: 'Confluence' },
    { value: 'notion', label: 'Notion' },
   // { value: 'obsidian', label: 'Obsidian' },
    //{ value: 'sphinx', label: 'Sphinx' },
    { value: 'wiki', label: 'Wiki Systems' },
];


const dataAnalysis: FilterAction[] = [
    // Spreadsheets & BI
    { value: 'excel', label: 'Excel' },
    //{ value: 'tableau', label: 'Tableau' },
   // { value: 'power-bi', label: 'Power BI' },
   // { value: 'google-data-studio', label: 'Google Data Studio' },

    // Data Science (wenn nicht bei AI)
    { value: 'pandas', label: 'Pandas' },
    { value: 'numpy', label: 'NumPy' },
    { value: 'matplotlib', label: 'Matplotlib' },
    { value: 'jupyter', label: 'Jupyter' },
    { value: 'r', label: 'R' },
];


const scientificTools: FilterAction[] = [
    { value: 'jupyter', label: 'Jupyter Notebook' },
    { value: 'r-studio', label: 'RStudio' },
    { value: 'matlab', label: 'MATLAB' },
    { value: 'mathematica', label: 'Mathematica' },
    { value: 'latex', label: 'LaTeX' },
    { value: 'zotero', label: 'Zotero' },
    { value: 'mendeley', label: 'Mendeley' },
];

const securityNetworking: FilterAction[] = [
    { value: 'vpn', label: 'VPN' },
    { value: 'ssh', label: 'SSH' },
    { value: 'ssl-tls', label: 'SSL/TLS' },
    { value: 'firewall', label: 'Firewall' },
    { value: 'oauth', label: 'OAuth' },
];