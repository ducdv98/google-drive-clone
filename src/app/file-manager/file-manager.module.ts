import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FileManagerContainerComponent } from './file-manager-container.component';
import { components, NotImplementedComponent } from './components';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { directives } from './directives';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { ActivityItemComponent } from './components/detail-panel-tabs/activity-item/activity-item.component';
import { MatMenuModule } from '@angular/material/menu';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-drive',
    pathMatch: 'full',
  },
  {
    path: 'my-drive',
    component: FileManagerContainerComponent,
    data: {
      title: 'My Drive',
    }
  },
  {
    path: 'shared-with-me',
    component: NotImplementedComponent,
    data: {
      title: 'Shared with me',
    }
  },
  {
    path: 'starred',
    component: NotImplementedComponent,
    data: {
      title: 'Starred',
    }
  },
  {
    path: 'recent',
    component: NotImplementedComponent,
    data: {
      title: 'Recent',
    }
  },
  {
    path: 'trash',
    component: NotImplementedComponent,
    data: {
      title: 'Trash',
    }
  },
  {
    path: 'computers',
    component: NotImplementedComponent,
    data: {
      title: 'Computers',
    }
  }
];

@NgModule({
  declarations: [
    components,
    FileManagerContainerComponent,
    directives,
    ActivityItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatGridListModule,
    MatTabsModule,
    MatDividerModule,
    MatMenuModule,
  ],
})
export class FileManagerModule {
}
