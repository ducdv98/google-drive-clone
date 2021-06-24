import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DocumentType } from '@core/data/models';

@Component({
  selector: 'app-suggested-list',
  templateUrl: './suggested-list.component.html',
  styleUrls: ['./suggested-list.component.scss']
})
export class SuggestedListComponent implements OnInit, OnChanges {
  @Input() detailPanelOpened: boolean;

  numberOfItemsPerRow = 4;

  items = [
    {
      id: 964607,
      name: 'DEA documents',
      thumbnail: '',
      createdDate: '1970-01-01T00:00:01.998Z',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      lastModifiedDate: '1970-01-01T00:00:01.987Z',
      iconType: 'word',
      type: DocumentType.FILE,
    },
    {
      id: 730307,
      name: 'Nulla lobortis',
      thumbnail: '',
      createdDate: '1970-01-01T00:00:01.986Z',
      description: 'Lorem a felis sollicitudin, id laoreet mauris tincidunt',
      lastModifiedDate: '1970-01-01T00:00:01.985Z',
      iconType: 'folder',
      type: DocumentType.FOLDER,
    },
    {
      id: 110030,
      name: 'malesuada ',
      thumbnail: '',
      createdDate: '1970-01-01T00:00:02.004Z',
      description: 'Lorem a felis sollicitudin, id laoreet mauris tincidunt',
      lastModifiedDate: '1970-01-01T00:00:02.004Z',
      iconType: 'excel',
      type: DocumentType.FILE,
    },
    {
      id: 954551,
      name: 'Sed volutpat mi vel mauris',
      thumbnail: '',
      mimeType: 'docx',
      createdDate: '1970-01-01T00:00:02.004Z',
      description: 'Lorem a felis sollicitudin, id laoreet mauris tincidunt',
      lastModifiedDate: '1970-01-01T00:00:02.004Z',
      iconType: 'pdf',
      type: DocumentType.FILE,
    }
  ];

  @HostListener('window:resize', ['$event.target'])
  onResize(): void {
    const width = this.el.nativeElement.children[0].clientWidth;
    const gaps = Math.round(parseInt(width, 0) / 250) - 1;
    this.numberOfItemsPerRow = Math.round(parseInt(width, 0) / (250 + 15 * gaps));
  }

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    const width = this.el.nativeElement.children[0].clientWidth;
    const gaps = Math.round(parseInt(width, 0) / 250) - 1;
    this.numberOfItemsPerRow = Math.round(parseInt(width, 0) / (250 + 15 * gaps));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.detailPanelOpened) {
      if (this.detailPanelOpened) {
        this.numberOfItemsPerRow = 3;
        this.el.nativeElement.children[0].style.width = 'calc(100% - 24px)';
      } else {
        this.numberOfItemsPerRow = 4;
        this.el.nativeElement.children[0].style.width = 'calc(100% - 64px)';
      }
    }
  }

}
