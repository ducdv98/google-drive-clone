import { Component, OnInit } from '@angular/core';
import * as fromStore from '@app/core/store';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { DocumentModel } from '@core/data/models';

@Component({
  selector: 'app-my-drive',
  templateUrl: './my-drive.component.html',
  styleUrls: ['./my-drive.component.scss']
})
export class MyDriveComponent implements OnInit {
  documents$: Observable<Array<DocumentModel>>;

  constructor(private store: Store<fromStore.AppState>) {
    this.store.dispatch(fromStore.getDocuments());
  }

  ngOnInit(): void {
    this.documents$ = this.store.pipe(select(fromStore.selectAllDocuments));
  }

}
