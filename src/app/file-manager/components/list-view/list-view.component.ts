import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { LayoutService } from '@app/shared/services';
import { MatTableDataSource } from '@angular/material/table';
import { DocumentModel } from '@core/data/models';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent extends BaseComponent implements OnInit, OnChanges {
  displayedColumns = ['name', 'owner', 'lastModified', 'fileSize'];
  dataSource = new MatTableDataSource<DocumentModel>(this.documents);

  constructor(public layoutService: LayoutService) {
    super(layoutService);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.documents && this.documents) {
      this.dataSource = new MatTableDataSource<DocumentModel>(this.documents);
    }
  }
}
