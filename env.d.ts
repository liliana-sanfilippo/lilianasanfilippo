interface ImportMetaEnv {
    readonly REACT_APP_BASE_NAME: string;
    readonly REACT_APP_BLOG_ROOT: string
    readonly REACT_APP_TAG_ROOT: string
    readonly REACT_APP_CURRENT_PROJECT_PATH: string
    readonly REACT_APP_REACT_REFERENCE_MANAGER_PATH: string
    readonly REACT_APP_REACT_REFERENCE_GENERATOR_PATH: string
    readonly REACT_APP_REACT_BIBTEX_PARSER_PATH: string
    readonly REACT_APP_REACT_AUTHOR_PARSER_PATH: string
    readonly REACT_APP_PACKAGE_PATH: string
    readonly REACT_APP_PROJECT_ARCHIVE_PATH: string
    readonly REACT_APP_IGEM_BIELEFELD_OVERVIEW_PATH: string
    readonly REACT_APP_IGEM_BIELEFELD_PATH: string
    readonly REACT_APP_IGEM_BIELEFELD_FOR_ADVISORS_PATH: string
    readonly REACT_APP_IGEM_BIELEFELD_PROJECTS_PATH: string
    readonly REACT_APP_COUNSELLING_SYSTEM_PATH: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv;

}