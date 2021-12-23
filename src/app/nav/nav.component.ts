import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../project/project.service';
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

    constructor(private viewService: ViewService, private projectService: ProjectService) {}

    ngOnInit(): void {
        this.logoPath = this.projectService.config.logoUrl;
    }

    public closeNav() {
        this.viewService.closeNav();
    }
}
