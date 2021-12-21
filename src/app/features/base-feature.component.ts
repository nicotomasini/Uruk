import { Component, OnInit } from '@angular/core';
import { IPageConfig } from '../view-service/model/page-config.interface';
import { ViewService } from '../view-service/view.service';

@Component({
    template: ''
})
export abstract class BaseFeatureComponent implements OnInit {

    constructor(protected viewService: ViewService) {}

    protected abstract get pageConfig(): IPageConfig;

    public ngOnInit() {
        if (this.pageConfig) {
            this.viewService.setPageConfig(this.pageConfig);
        }
    }
}