import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class TenantInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /*  return from(this.auth.tenantId).pipe(
            mergeMap((tenantId: string | null) => {
                if (request.url.includes('assets')) {
                    return next.handle(request);
                }

                if (tenantId) {
                    const config = this.tenantService.config;
                    if (config) {
                        request = request.clone({
                            url: `${environment.apiUrl}api/${config.version}/${request.url}`,
                            setHeaders: { 'x-tenant-id': tenantId },
                        });
                    }
                }
 */
        return next.handle(request);
        /*     })
        ); */
    }
}
