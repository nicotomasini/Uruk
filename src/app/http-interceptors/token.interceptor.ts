import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.includes('passwordreset')) {
            return next.handle(request);
        }

        /*     return this.auth.idToken.pipe(
            take(1),
            mergeMap((token: any) => {
                if (token) {
                    request = request.clone({
                        setHeaders: { Authorization: `Bearer ${token}` },
                    });
                } */

        return next.handle(request);
        /*     })
        ); */
    }
}
