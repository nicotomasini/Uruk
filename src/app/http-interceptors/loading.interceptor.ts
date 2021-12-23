import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    private requestCount = 0;

    constructor(private spinner: NgxSpinnerService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.requestCount++;
        this.spinner.show();

        return next.handle(request).pipe(
            finalize(() => {
                this.requestCount--;
                if (this.requestCount === 0) {
                    this.spinner.hide();
                }
            })
        );
    }
}
