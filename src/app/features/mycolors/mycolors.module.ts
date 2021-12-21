import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MyColorsComponent } from './mycolors.component';

const routes: Routes = [
    {
        path: '',
        component: MyColorsComponent,
        data: { breadcrumb: 'features.myColors' },
    },
];

@NgModule({
    declarations: [MyColorsComponent],
    imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
})
export class MycolorsModule {}
