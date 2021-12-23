import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SwiperModule } from 'swiper/angular';

import { httpInterceptorProviders } from './http-interceptors/index';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProfileComponent } from './features/profile/profile.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { configFactory } from './project.provider';
import { ProjectService } from './project/project.service';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [AppComponent, NavComponent, ToolbarComponent, ProfileComponent, AppContainerComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            defaultLanguage: 'de',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        ReactiveFormsModule,
        SwiperModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        httpInterceptorProviders,
        {
            provide: APP_INITIALIZER,
            useFactory: configFactory,
            deps: [ProjectService],
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
