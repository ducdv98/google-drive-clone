import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { LayoutService } from '@app/shared/services';
import { DocumentModel, DocumentType } from '@core/data/models';
import * as _ from 'lodash-es';
import { KeyCode } from '@core/data/enums';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  @Input() documents: Array<DocumentModel>;
  @Input() selectedDocument: DocumentModel;
  @Input() detailPanelOpened: boolean;
  @Input() dropTarget: string;

  @Output() selectDocument: EventEmitter<number> = new EventEmitter();
  @Output() dragStart: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<DocumentModel> = new EventEmitter();
  @Output() deleteMany: EventEmitter<Array<DocumentModel>> = new EventEmitter();

  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;

  contextMenuDocument: DocumentModel;
  contextMenuPosition = { x: '0px', y: '0px' };

  multiFiles: Array<DocumentModel> = [];
  filesDragging: Array<DocumentModel> = [];
  selectFiles = { start: 0, end: 0 };

  isPressCtrl = false;
  isPressShift = false;
  isSingleClick = true;
  isOpenContextMenu = false;

  DocumentType = DocumentType;

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit(): void {
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEventKeydown(event: KeyboardEvent): void {
    if (event.keyCode === KeyCode.KEY_CTRL) {
      this.isPressCtrl = true;
      this.isPressShift = false;
    }

    if (event.keyCode === KeyCode.KEY_SHIFT) {
      this.isPressShift = true;
      this.isPressCtrl = false;
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.keyCode === KeyCode.KEY_DEL) {
      const fileDelete = this.documents.find(doc => doc.id === this.selectedDocument.id);
      if (this.selectedDocument.id) {
        this.delete.emit(fileDelete);
        return;
      }
      if (this.multiFiles.length > 0) {
        this.deleteMany.emit(this.multiFiles);
        return;
      }
    }
    setTimeout(() => {
      this.isPressCtrl = false;
      this.isPressShift = false;
    }, 100);
  }


  onClick(document: DocumentModel, index: number, e: MouseEvent): void {
    if (e.detail > 1) {
      return;
    }

    if (!this.isPressCtrl && !this.isPressShift) {
      this.isSingleClick = true;
      setTimeout(() => {
        if (this.isSingleClick && !this.isOpenContextMenu) {
          this.selectDocument.emit(document.id);
        }
      }, 50);
      return;
    }

    if (this.isPressCtrl) {
      if (this.selectedDocument && !this.multiFiles.includes(this.selectedDocument)) {
        this.multiFiles.push(this.selectedDocument);
      }
      if (this.multiFiles.includes(document)) {
        this.multiFiles = _.pull(this.multiFiles, document);
      } else {
        this.multiFiles.push(document);
      }
      return;
    }

    // TODO: handle SHIFT key press
    if (this.selectedDocument) {
      this.selectFiles.start = this.documents.findIndex(at => at.id === this.selectedDocument.id);
    }
    if (this.multiFiles.length === 0) {
      this.selectFiles.start = index;
      this.multiFiles.push(document);
      return;
    }
    this.selectFiles.end = index;
    if (this.selectFiles.start < this.selectFiles.end) {
      this.multiFiles = _.slice(this.documents, this.selectFiles.start, this.selectFiles.end + 1);
    } else {
      this.multiFiles = _.slice(this.documents, this.selectFiles.end, this.selectFiles.start + 1);
    }
  }

  onOpenPreviewAttachment(document: DocumentModel): void {

  }

  onDragStartFile(event: DragEvent, document: DocumentModel): void {
    if (this.multiFiles.length > 0) {
      this.filesDragging = this.multiFiles;
    } else {
      this.filesDragging.push(document);
    }
    this.dragStart.emit(this.filesDragging);
  }

  onDragEnd(): void {
    this.filesDragging = [];
    this.multiFiles = [];
  }

  trackByFn(index: string | number, row: any): string {
    return row.id || index;
  }

  onPreviewButtonClicked(): void {

  }

  // Context menu
  onOpenContextMenu(event: MouseEvent, document: DocumentModel): void {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { document };

    if (this.contextMenu.menuOpen) {
      this.contextMenu.closeMenu();
    }

    this.openContextMenu(document);
  }

  openContextMenu(item: DocumentModel): void {
    setTimeout(() => {
      if (!this.contextMenu.menuOpen) {
        this.contextMenu.openMenu();
        this.contextMenuDocument = item;
        this.isOpenContextMenu = true;
        return;
      }
      this.openContextMenu(item);
    }, 50);
  }

  onClickOutMenu(): void {
    this.contextMenu.closeMenu();
  }

  onCloseContextMenu(): void {
    this.isOpenContextMenu = false;
  }
}
