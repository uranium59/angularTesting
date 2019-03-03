export interface Menu {
    name: string;
    iconClass: string;
    active: boolean;
    submenu: { name: string, url: string, isOpened: boolean}[];
}
