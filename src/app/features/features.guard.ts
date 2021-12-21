import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FeaturesGuard implements CanActivate, CanLoad {
    admin = true;
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const path = route.routeConfig?.path;

        if (path && this.isEnabled(path)) {
            return true;
        }

        this.router.navigate(['/profile']);
        return false;
    }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        const path = route.path;

        if (path && this.isEnabled(path)) {
            return true;
        }

        this.router.navigate(['/profile']);
        return false;
    }

    private isEnabled(path: string) {
        /*  const features = this.tenantService.config?.features;
        const enabledFeatures = Object.keys(features)
            .filter((key) => features[key] === true)
            .map((key) => key.toLowerCase());

        const pathWithoutDash = path.replace(/-/g, '');
        if (enabledFeatures.find((f) => pathWithoutDash === f)) {
            return true;
        }

        return false; */
    }
}
