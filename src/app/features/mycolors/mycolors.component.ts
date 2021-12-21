import { Component, OnInit } from '@angular/core';

import { IPageConfig } from '../../view-service/model/page-config.interface';
import { ViewService } from '../../view-service/view.service';

import { BaseFeatureComponent } from '../base-feature.component';

@Component({
    selector: 'ca-mycolors',
    templateUrl: './mycolors.component.html',
    styleUrls: ['./mycolors.component.scss'],
})
export class MyColorsComponent extends BaseFeatureComponent implements OnInit {
    protected get pageConfig(): IPageConfig {
        return {
            title: 'myColors',
        };
    }

    constructor(protected viewService: ViewService) {
        super(viewService);
    }

    ngOnInit(): void {
        super.ngOnInit();
    }
}
