import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  subFolders: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  notImplementedItems = [
    {
      label: 'Computers',
      icon: 'devices',
      url: 'drive/computers'
    },
    {
      label: 'Shared with me',
      icon: 'people',
      url: 'drive/shared-with-me'
    },
    {
      label: 'Recent',
      icon: 'schedule',
      url: 'drive/recent'
    },
    {
      label: 'Starred',
      icon: 'star_outline',
      url: 'drive/starred'
    },
    {
      label: 'Trash',
      icon: 'delete_outline',
      url: 'drive/trash'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
