import { BehaviorSubject } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  // @ts-ignore
  isSmallScreen$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  // @ts-ignore
  isXSmallScreen$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(breakpointObserver: BreakpointObserver) {
    this.isSmallScreen$.next(breakpointObserver.isMatched('(max-width: 959px)'));
    this.isXSmallScreen$.next(breakpointObserver.isMatched('(max-width: 599px)'));

    breakpointObserver.observe([
      '(max-width: 959px)'
    ]).subscribe(result => {
      if (result.matches) {
        this.isSmallScreen$.next(true);

        return;
      }

      this.isSmallScreen$.next(false);
    });

    breakpointObserver.observe([
      '(max-width: 599px)'
    ]).subscribe(result => {
      if (result.matches) {
        this.isXSmallScreen$.next(true);

        return;
      }

      this.isXSmallScreen$.next(false);
    });
  }
}
