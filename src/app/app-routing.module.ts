import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'drive',
    pathMatch: 'full',
  },
  {
    path: 'drive',
    loadChildren: () => import('@app/file-manager/file-manager.module').then(m => m.FileManagerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
