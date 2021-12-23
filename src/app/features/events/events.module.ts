import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EventsComponent } from './events.component';

const routes: Routes = [
    {
        path: '',
        component: EventsComponent,
        data: { breadcrumb: 'features.events' },
    },
];

@NgModule({
    declarations: [EventsComponent],
    imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
})
export class EventsModule {}
