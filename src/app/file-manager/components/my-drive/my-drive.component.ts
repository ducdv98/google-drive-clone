import { Component, OnInit } from '@angular/core';
import * as fromStore from '@app/core/store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DocumentModel } from '@core/data/models';

@Component({
  selector: 'app-my-drive',
  templateUrl: './my-drive.component.html',
  styleUrls: ['./my-drive.component.scss']
})
export class MyDriveComponent implements OnInit {
  documents$: Observable<Array<DocumentModel>>;

  showAsGrid$: Observable<boolean>;

  constructor(private store: Store<fromStore.AppState>) {
    this.store.dispatch(fromStore.getDocuments());
  }

  ngOnInit(): void {
    this.documents$ = this.store.pipe(select(fromStore.selectAllDocuments));
    this.showAsGrid$ = this.store.pipe(select(fromStore.selectFileManagerShowAsGrid));
  }

  onFileDrop(itemDrop: any): void {

  }

  onFileOver(itemOver: any): void {

  }

  onFileLeave(event: any): void {
  }

}
