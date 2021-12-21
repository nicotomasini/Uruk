import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { IPageConfig } from '../view-service/model/page-config.interface';
import { ViewService } from '../view-service/view.service';

@Component({
    selector: 'ca-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
@UntilDestroy()
export class ToolbarComponent implements OnInit {
    public pageConfig!: IPageConfig;
    public languages!: string[];
    public languageControl!: FormControl;
    public showNav = false;
    public showLanguageSwitch = false;

    constructor(private viewService: ViewService, private translate: TranslateService) {}

    ngOnInit(): void {
        this.viewService.pageConfig.pipe(untilDestroyed(this)).subscribe((pageConfig) => {
            this.pageConfig = pageConfig;
        });

        this.viewService.showNav.pipe(untilDestroyed(this)).subscribe((showNav) => {
            this.showNav = showNav;
        });

        /*  this.showLanguageSwitch = this.tenantService.config?.showLanguageSwitch; */

        this.initLanguageForm();
    }

    private initLanguageForm() {
        this.languages = this.translate.getLangs();

        const currentLang = this.translate.currentLang;
        this.languageControl = new FormControl(currentLang, [Validators.required]);

        this.languageControl.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
            this.translate.use(value);
        });
    }

    public toggleNav() {
        if (this.showNav) {
            this.viewService.closeNav();
        } else {
            this.viewService.openNav();
        }
    }
}
