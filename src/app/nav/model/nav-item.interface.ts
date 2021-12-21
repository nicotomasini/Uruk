import { TemplateRef } from "@angular/core";
import { IconLookup } from "@fortawesome/fontawesome-svg-core";

export interface INavItem {
    title: string;
    route: string;
    faIcon?: IconLookup;
    iconTemplate?: TemplateRef<unknown>;
    disabled: boolean;
}