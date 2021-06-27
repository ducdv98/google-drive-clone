import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromStore from '@app/core/store';

@Component({
  selector: 'app-detail-panel',
  templateUrl: './detail-panel.component.html',
  styleUrls: ['./detail-panel.component.scss']
})
export class DetailPanelComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) {
  }

  ngOnInit(): void {
  }

  onCloseDetailPanel(): void {
    this.store.dispatch(fromStore.toggleDetailPanelAction());
  }

}
