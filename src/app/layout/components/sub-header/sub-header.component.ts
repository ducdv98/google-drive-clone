import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import * as fromStore from '@core/store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  title = '';

  showAsGrid$: Observable<boolean>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromStore.AppState>) {
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe(data => this.title = data.title);


    this.showAsGrid$ = this.store.pipe(select(fromStore.selectFileManagerShowAsGrid));
  }

  toggleDetailPanel(): void {
    this.store.dispatch(fromStore.toggleDetailPanelAction());
  }

  toggleShowAsGrid(): void {
    this.store.dispatch(fromStore.toggleShowAsGridAction());
  }

}
