import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicDownloadPage } from './comic-download.page';

const routes: Routes = [
  {
    path: '',
    component: ComicDownloadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicDownloadPageRoutingModule {}
