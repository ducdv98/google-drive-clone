import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { LayoutService } from '@app/shared/services';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent extends BaseComponent implements OnInit {

  constructor(public layoutService: LayoutService) {
    super(layoutService);
  }

  ngOnInit(): void {
  }

}
