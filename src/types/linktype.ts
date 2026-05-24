export interface Linktype {
    title: string,
    link: string,
    tag?: string,
    author?: string,
    helpfulness?: number // out of 5
}

export interface AILinktype extends Linktype {
    documenttype: string | undefined,
    pages: number | undefined,
    search: number | undefined
    textinfo: {
        focus: "ai" | string,
        aiin: string[],
        aidifferentiation: boolean | undefined,
    }
    definitions: Definition[],
    sourceinfo: SourceInfo,
    notes?: string[]
}


type Definition = ExistingDefinition | AnyDefinition;

type SourceInfo = { exist: false } | SourcesExist | undefined;

interface SourcesExist {
    exist: boolean,
    sources: Source[]
}


interface ExistingDefinition {
    word: string,
    exist: true
    correct: boolean,
}

interface AnyDefinition {
    word: string,
    exist: false
}


interface Source {
    type: string,
    year: number,
    citation: string
}