import {JSX, ReactNode} from "react";

export type SidebarContents = { header: string; subheaders?: string[] };

export interface Base {
    name: string | undefined;
}

export class Folder implements Base {
    name: string | undefined;
    folder: ContentArray | undefined;
}

export class Page implements Base {
    name: string | undefined;
    title: string | undefined;
    path: string | undefined;
    component!: ReactNode | JSX.Element;
    header?: ReactNode;
}

export class PageRef implements Base {
    name: string | undefined;
    title: string | undefined;
    path: string | undefined;
    component?: ReactNode | JSX.Element;
    header?: ReactNode;
}

export type ContentItem = Page | PageRef | Folder;
type ContentArray = ContentItem[];