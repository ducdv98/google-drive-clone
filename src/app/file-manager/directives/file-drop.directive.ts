import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appFileDrop]'
})
export class FileDropDirective {

  @Output() fileOver: EventEmitter<any> = new EventEmitter<any>();
  @Output() fileLeave: EventEmitter<any> = new EventEmitter<any>();
  @Output() fileDrop: EventEmitter<any> = new EventEmitter<any>();

  dragLeft: boolean;
  added = false;

  onDrop$ = new Subject();

  constructor() {
  }

  @HostListener('document:dragenter ')
  onDragEnter(): void {
    this.showPlaceholderElement();
  }

  @HostListener('document:dragover', ['$event'])
  public onDragOver(event: any): void {
    if (event.preventDefault) {
      event.preventDefault();
    }

    if (event.target.className.includes('dropzone')) {
      event.target.classList.add('hover');
      event.dataTransfer.dropEffect = 'copy';
    } else {
      event.dataTransfer.dropEffect = 'none';
    }

    this.dragLeft = false;

    const folderId = event.target.getAttribute('data-folder-id');
    this.fileOver.emit(folderId);
    this.fileLeave.emit(true);
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('document:dragleave', ['$event'])
  public onDragLeave(event: any): void {
    if (event.preventDefault) {
      event.preventDefault();
    }

    this.dragLeft = true;
    setTimeout(() => {
      if (this.dragLeft) {
        this.hidePlaceholderElement();
        this.fileLeave.emit(false);
      }
    }, 200);

    if (event.target.className.includes('dropzone')) {
      event.target.classList.remove('hover');
    }

    this.fileOver.emit(null);
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any): void {
    const isFilesFromComputer = event.dataTransfer.files.length === 0;
    if (isFilesFromComputer) {
      const folderId = event.target.getAttribute('data-folder-id');
      const fileDrop = {
        idDropped: folderId,
        filesUpload: null
      };
      this.fileDrop.emit(fileDrop);
    } else {
      const folderId = event.target.getAttribute('data-folder-id');
      const fileDrop = {
        idDropped: folderId,
        filesUpload: event.dataTransfer.files
      };
      this.fileDrop.emit(fileDrop);
    }

    this.fileLeave.emit(false);
    this.hidePlaceholderElement();

    this.onDrop$.next();

    event.preventDefault();
    event.stopPropagation();
  }

  showPlaceholderElement(): void {
    if (this.added) {
      document.querySelectorAll('.dropable .dropzone').forEach(element => {
        element.classList.add('show');
        element.classList.remove('hide');
      });

      document.querySelectorAll('.dropable-root .dropzone').forEach(element => {
        element.classList.add('show');
        element.classList.remove('hide');
      });
    } else {
      document.querySelectorAll('.dropable').forEach(element => {
        const folderId = element.getAttribute('data-folder-id');
        const node = document.createElement('DIV');
        node.setAttribute('data-folder-id', folderId as string);
        node.classList.add('dropzone');
        node.classList.add('show');
        element.appendChild(node);
      });

      const rootEl = document.querySelector('.dropable-root');

      const rootFolderId = rootEl?.getAttribute('data-folder-id');
      const rootNode = document.createElement('DIV');
      rootNode.setAttribute('data-folder-id', rootFolderId as string);
      rootNode.classList.add('dropzone');
      rootNode.classList.add('root');
      rootNode.classList.add('show');
      rootEl?.appendChild(rootNode);

      this.added = true;
    }
  }

  hidePlaceholderElement(): void {
    document.querySelectorAll('.dropable .dropzone, .dropable-root .dropzone').forEach(element => {
      element.remove();
    });

    this.added = false;
  }

}
