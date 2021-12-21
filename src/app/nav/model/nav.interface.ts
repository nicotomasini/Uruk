import { INavItem } from "./nav-item.interface";

export interface INavSection {
    section: number;
    items: INavItem[];
}