import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { IPageConfig } from './model/page-config.interface';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  private pageConfigSubject = new ReplaySubject<IPageConfig>(1);
  private showNavSubject = new ReplaySubject<boolean>();

  public pageConfig: Observable<IPageConfig> = this.pageConfigSubject.asObservable();
  public showNav: Observable<boolean> = this.showNavSubject.asObservable();

  public setPageConfig(config: IPageConfig) {
    this.pageConfigSubject.next(config);
  }

  public openNav() {
    this.showNavSubject.next(true);
  }

  public closeNav() {
    this.showNavSubject.next(false);
  }
}
