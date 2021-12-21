export interface ProjectConfig {
    version: string;
    logoUrl: string;
    brandColor: string;
    buttonColor: string;
    defaultLanguage: string;
    showLanguageSwitch: boolean;
    features: { [key: string]: boolean };
    entryRoute: string;
}
