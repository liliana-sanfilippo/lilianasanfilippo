import {Page} from "../types/Pages";
import {NavBarContent} from "../routes/navBarContent";

export const getPathMapping = () => {
    // Rekursive Hilfsfunktion zum Verarbeiten eines Items
    const processItem = (map: { [key: string]: Page }, item: any, parentPath: string = ""): void => {
        // Wenn das Item einen Pfad hat, zur Map hinzufügen

        // Wenn das Item einen Ordner hat, rekursiv durchlaufen
        if ("folder" in item && item.folder) {
            const slug = item.name
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '');

            // Vollständigen Pfad aufbauen
            const currentPath = parentPath + '/' + slug;
            if (item.component) {
                map[currentPath] = {
                    name: item.name,
                    title: item.title,
                    path: item.path,
                    component: item.component,
                    header: item.header,
                };
            }
            item.folder.forEach((subItem: any) => {
                processItem(map, subItem, currentPath); // Rekursiver Aufruf
            });
        } else if (item && item.path && item.component) {
            const finalPath = parentPath + item.path;
            console.log("Path: " + finalPath);
            map[finalPath] = {
                name: item.name,
                title: item.title,
                path: item.path,
                component: item.component,
                header: item.header,
            };
        }
    };

    return NavBarContent.reduce<{
        [key: string]: Page;
    }>((map, item) => {
        processItem(map, item);
        return map;
    }, {});
};