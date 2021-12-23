import { Component, OnInit } from '@angular/core';

import { IPageConfig } from '../../view-service/model/page-config.interface';
import { ViewService } from '../../view-service/view.service';

import { BaseFeatureComponent } from '../base-feature.component';

@Component({
    selector: 'ca-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
})
export class EventsComponent extends BaseFeatureComponent implements OnInit {
    protected get pageConfig(): IPageConfig {
        return {
            title: 'events',
        };
    }

    constructor(protected viewService: ViewService) {
        super(viewService);
    }

    ngOnInit(): void {
        super.ngOnInit();
    }
}
