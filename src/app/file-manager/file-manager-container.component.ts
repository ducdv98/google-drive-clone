import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '@app/core/store';
import { Observable } from 'rxjs';
import { MatMenuTrigger } from '@angular/material/menu';
import { DocumentModel } from '@core/data/models';

@Component({
  selector: 'app-file-manager-container',
  templateUrl: './file-manager-container.component.html',
  styleUrls: ['./file-manager-container.component.scss']
})
export class FileManagerContainerComponent implements OnInit {
  detailPanelOpened$: Observable<boolean>;

  contextMenuPosition = { x: '0px', y: '0px' };
  isOpenContextMenu = false;

  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;

  constructor(private store: Store<fromStore.AppState>) {
  }

  ngOnInit(): void {
    this.detailPanelOpened$ = this.store.pipe(select(fromStore.selectFileManagerOpenDetailPanel));
  }

  onOpenContextMenu(event: MouseEvent): void {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { document };

    if (this.contextMenu.menuOpen) {
      this.contextMenu.closeMenu();
    }

    this.openContextMenu();
  }

  openContextMenu(): void {
    setTimeout(() => {
      if (!this.contextMenu.menuOpen) {
        this.contextMenu.openMenu();
        this.isOpenContextMenu = true;
        return;
      }
      this.openContextMenu();
    }, 50);
  }

  onCloseContextMenu(): void {
    this.isOpenContextMenu = false;
  }

}
