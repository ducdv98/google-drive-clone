import { Component, ElementRef, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { LayoutService } from '@app/shared/services';

const widthItemInGrid = 250;

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent extends BaseComponent implements OnInit, OnChanges {

  numberOfItemsPerRow = 4;

  constructor(public layoutService: LayoutService,
              private el: ElementRef) {
    super(layoutService);
  }

  ngOnInit(): void {
    this.updateNumberOfItemsPerRow();
  }

  @HostListener('window:resize', ['$event.target'])
  onResize(): void {
    this.updateNumberOfItemsPerRow();
  }

  updateNumberOfItemsPerRow(): void {
    const width = this.el.nativeElement.children[0].clientWidth;
    const gaps = Math.round(parseInt(width, 0) / widthItemInGrid) - 1;
    this.numberOfItemsPerRow = Math.round(parseInt(width, 0) / (widthItemInGrid + 15 * gaps));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.detailPanelOpened) {
      setTimeout(() => {
        this.updateNumberOfItemsPerRow();
      }, 200);

      if (this.detailPanelOpened) {
        this.el.nativeElement.children[0].style.paddingRight = '24px';
      } else {
        this.el.nativeElement.children[0].style.paddingRight = '64px';
      }

    }
  }

}
