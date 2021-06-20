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
    FileManagerContainerComponent,
    components,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
  ],
})
export class FileManagerModule {
}
