import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '@app/core/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-file-manager-container',
  templateUrl: './file-manager-container.component.html',
  styleUrls: ['./file-manager-container.component.scss']
})
export class FileManagerContainerComponent implements OnInit {
  detailPanelOpened$: Observable<boolean>;

  constructor(private store: Store<fromStore.AppState>) {
  }

  ngOnInit(): void {
    this.detailPanelOpened$ = this.store.pipe(select(fromStore.selectFileManagerOpenDetailPanel));
  }

}
