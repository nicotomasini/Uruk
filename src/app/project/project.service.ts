import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ThemingService } from '../theming/theming.service';
import { ProjectConfig } from './project-config.interface';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    private projectConfig!: ProjectConfig;

    public get config(): ProjectConfig {
        return this.projectConfig;
    }

    constructor(private http: HttpClient, private themingService: ThemingService) {}

    public loadProjectConfig(): Promise<ProjectConfig | void> {
        return this.http
            .get<ProjectConfig>(`./assets/configs/projectConfig.json`)
            .toPromise()
            .then((config) => {
                this.projectConfig = config;

                if (this.projectConfig.brandColor) {
                    this.themingService.setColor('brand', this.projectConfig.brandColor);
                }

                if (this.projectConfig.buttonColor) {
                    this.themingService.setColor('brand-button', this.projectConfig.buttonColor);
                }
            });
    }
}
