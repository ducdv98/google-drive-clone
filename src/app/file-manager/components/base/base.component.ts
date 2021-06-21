import { Component, Input, OnInit } from '@angular/core';
import * as fromStore from '@app/core/store';
import { Store } from '@ngrx/store';
import { LayoutService } from '@app/shared/services';
import { DocumentModel } from '@core/data/models';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  @Input() documents: Array<DocumentModel>;

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit(): void {
  }

  trackByFn(index: string | number, row: any): string {
    return row.id || index;
  }

}
