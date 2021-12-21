import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppContainerComponent } from './app-container/app-container.component';
import { ProfileComponent } from './features/profile/profile.component';
import { FeaturesGuard } from './features/features.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: '',
        component: AppContainerComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule),
                canLoad: [FeaturesGuard],
                data: { breadcrumb: 'home' },
            },
            {
                path: 'mycolors',
                loadChildren: () => import('./features/mycolors/mycolors.module').then((m) => m.MycolorsModule),
                canLoad: [FeaturesGuard],
                data: { breadcrumb: 'features.myColors' },
            },
            {
                path: 'profile',
                component: ProfileComponent,
                data: { breadcrumb: 'profile' },
            },
        ],
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
