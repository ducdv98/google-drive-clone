import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import * as fromStore from '@core/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  title = '';

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
  }

  toggleDetailPanel(): void {
    this.store.dispatch(fromStore.toggleDetailPanel());
  }

}
