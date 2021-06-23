import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { LayoutService } from '@app/shared/services';
import { DocumentModel, DocumentType } from '@core/data/models';
import * as _ from 'lodash-es';
import { KeyCode } from '@core/data/enums';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  @Input() documents: Array<DocumentModel>;
  @Input() selectedDocumentId: number;
  @Input() selectedDocument: DocumentModel;

  @Output() toggleDetails: EventEmitter<DocumentModel> = new EventEmitter();
  @Output() dragStart: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<DocumentModel> = new EventEmitter();
  @Output() deleteMany: EventEmitter<Array<DocumentModel>> = new EventEmitter();

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
      const fileDelete = this.documents.find(doc => doc.id === this.selectedDocumentId);
      if (this.selectedDocumentId) {
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

  trackByFn(index: string | number, row: any): string {
    return row.id || index;
  }

  onOpenAttachmentDetails(document: DocumentModel, index: number, e: MouseEvent): void {
    if (e.detail > 1) {
      return;
    }

    if (!this.isPressCtrl && !this.isPressShift) {
      this.isSingleClick = true;
      setTimeout(() => {
        if (this.isSingleClick && !this.isOpenContextMenu) {
          this.toggleDetails.emit(document);
        }
      }, 50);
      return;
    }

    if (this.isPressCtrl) {
      if (this.selectedDocument) {
        this.multiFiles.push(this.selectedDocument);
      }
      if (this.multiFiles.includes(document)) {
        this.multiFiles = _.pull(this.multiFiles, document);
        return;
      }
      this.multiFiles.push(document);
      return;
    }

    if (this.selectedDocument) {
      this.multiFiles.push(this.selectedDocument);
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

  onContextMenu(event: MouseEvent, document: DocumentModel): void {

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

}
