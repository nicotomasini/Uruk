import { Component, Input, OnInit } from '@angular/core';
import { ViewService } from '../view-service/view.service';
import { INavSection } from './model/nav.interface';

@Component({
    selector: 'ca-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
    @Input()
    public navSections!: INavSection[];

    public logoPath!: string;

    constructor(private viewService: ViewService) {}

    ngOnInit(): void {
        /*   this.logoPath = this.tenantService.config.logoUrl; */
    }

    public closeNav() {
        this.viewService.closeNav();
    }
}
