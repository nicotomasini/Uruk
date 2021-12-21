import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IPageConfig } from '../../view-service/model/page-config.interface';
import { ViewService } from '../../view-service/view.service';

import { BaseFeatureComponent } from '../base-feature.component';

@Component({
    selector: 'ca-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HomeComponent extends BaseFeatureComponent implements OnInit {
    protected get pageConfig(): IPageConfig {
        return {
            title: 'home',
        };
    }

    constructor(protected viewService: ViewService) {
        super(viewService);
    }

    ngOnInit() {
        super.ngOnInit();
    }
}
