import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SwiperModule } from 'swiper/angular';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { breadcrumb: 'features.home' },
    },
];

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes), NgxDatatableModule, SwiperModule],
})
export class HomeModule {}
