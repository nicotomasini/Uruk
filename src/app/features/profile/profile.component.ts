import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { IPageConfig } from '../../view-service/model/page-config.interface';
import { ViewService } from '../../view-service/view.service';

import { BaseFeatureComponent } from '../base-feature.component';

@Component({
    selector: 'ca-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
@UntilDestroy()
export class ProfileComponent extends BaseFeatureComponent implements OnInit {
    protected get pageConfig(): IPageConfig {
        return {
            title: 'myProfile',
        };
    }

    public user: any;

    constructor(protected viewService: ViewService, private router: Router) {
        super(viewService);
    }

    public ngOnInit() {
        super.ngOnInit();
        /*    this.auth.user.pipe(untilDestroyed(this)).subscribe((user) => {
            if (user) {
                this.user = user;
            }
        }); */
    }

    public async logout() {
        /*   await this.auth.signOut();
        this.router.navigate(['/login']); */
    }
}
