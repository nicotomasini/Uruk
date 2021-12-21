import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { INavItem } from '../nav/model/nav-item.interface';
import { INavSection } from '../nav/model/nav.interface';
import { ProjectConfig } from '../project/project-config.interface';
import { ProjectService } from '../project/project.service';
import { ViewService } from '../view-service/view.service';

@Component({
    selector: 'ca-app-container',
    templateUrl: './app-container.component.html',
    styleUrls: ['./app-container.component.scss'],
})
@UntilDestroy()
export class AppContainerComponent implements OnInit {
    pmo!: boolean;

    public navSections!: INavSection[];
    public showNav = false;

    private config!: ProjectConfig;

    constructor(private router: Router, private translate: TranslateService, private viewService: ViewService, private projectService: ProjectService) {}

    ngOnInit() {
        // eingelogt überprüfen

        this.config = this.projectService.config;
        if (this.config.entryRoute) {
            this.router.navigate([`/${this.config.entryRoute}`]);
        }

        this.setupTranslation();

        this.viewService.showNav.pipe(untilDestroyed(this)).subscribe((showNav) => {
            this.showNav = showNav;
        });
    }

    private setupTranslation() {
        this.translate.addLangs(['de', 'en']);
        // this language will be used as a fallback when a translation isn't found in the current language
        /*   this.translate.setDefaultLang(this.config.defaultLanguage || 'de');
        this.translate.use(this.config.defaultLanguage || 'de'); */
    }

    private initNav() {
        const section1Items: INavItem[] = [];
        const section2Items: INavItem[] = [];
        const section3Items: INavItem[] = [];

        // use push to easily control authentication by checking the role for each navItem in future
        //secetion1 = Events
        section1Items.push({
            title: 'home',
            faIcon: {
                iconName: 'home',
                prefix: 'fal',
            },
            route: '/home',
            disabled: this.config.features?.home === false,
        });

        /*    section1Items.push({
            title: 'reports',
            faIcon: {
                iconName: 'user-chart',
                prefix: 'fal',
            },
            route: '/reports',
            disabled: this.config.features?.reports === false,
        });

        section1Items.push({
            title: 'content',
            faIcon: {
                iconName: 'file-alt',
                prefix: 'fal',
            },
            route: '/content',
            disabled: this.config.features?.content === false,
        }); */

        //secetion2 = Einloggen

        section2Items.push({
            title: 'myColors',
            faIcon: {
                iconName: 'tasks-alt',
                prefix: 'fal',
            },
            route: '/mycolors',
            disabled: this.config.features?.myColors === false,
        });

        section2Items.push({
            title: 'goals',
            faIcon: {
                iconName: 'bullseye-arrow',
                prefix: 'fal',
            },
            route: '/goals',
            disabled: this.config.features?.goals === false,
        });

        section2Items.push({
            title: 'cultureVibe',
            faIcon: {
                iconName: 'plus-hexagon',
                prefix: 'fal',
            },
            route: '/culture-vibe',
            disabled: this.config.features?.cultureVibe === false,
        });

        section2Items.push({
            title: 'change',
            faIcon: {
                iconName: 'poll-people',
                prefix: 'fal',
            },
            route: '/change',
            disabled: this.config.features?.change === false,
        });

        section3Items.push({
            title: 'myProfile',
            faIcon: {
                iconName: 'user-cog',
                prefix: 'fal',
            },
            route: '/profile',
            disabled: false,
        });

        if (this.pmo) {
            section3Items.push({
                title: 'admin',
                faIcon: {
                    iconName: 'tools',
                    prefix: 'fal',
                },
                route: '/admin',
                disabled: this.config.features?.admin === false,
            });
        }

        this.navSections = [
            {
                section: 1,
                items: section1Items,
            },
            {
                section: 2,
                items: section2Items,
            },
            {
                section: 3,
                items: section3Items,
            },
        ];
    }
}
