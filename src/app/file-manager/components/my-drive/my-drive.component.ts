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
  detailPanelOpened$: Observable<boolean>;

  documents: Array<DocumentModel>;

  dropTarget: string;

  constructor(private store: Store<fromStore.AppState>) {
    this.store.dispatch(fromStore.getDocuments());
  }

  ngOnInit(): void {
    this.documents$ = this.store.pipe(select(fromStore.selectAllDocuments));
    this.showAsGrid$ = this.store.pipe(select(fromStore.selectFileManagerShowAsGrid));
    this.detailPanelOpened$ = this.store.pipe(select(fromStore.selectFileManagerOpenDetailPanel));

    this.documents$.pipe().subscribe(documents => (this.documents = documents));
  }

  onFileDrop(itemDrop: any): void {
    this.dropTarget = '';
  }

  onFileOver(itemOver: any): void {
    const folderId = parseInt(itemOver, 0);
    if (!itemOver) {
      this.dropTarget = '';
      return;
    }
    if (itemOver === 'root') {
      this.dropTarget = 'My Drive';
    } else {
      const documentOver = this.documents.find(at => at.id === folderId);
      this.dropTarget = !!documentOver ? documentOver.name : '';
    }
  }

  onFileLeave(event: any): void {
  }

}
