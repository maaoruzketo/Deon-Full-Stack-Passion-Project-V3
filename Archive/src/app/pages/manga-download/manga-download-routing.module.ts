import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangaDownloadPage } from './manga-download.page';

const routes: Routes = [
  {
    path: '',
    component: MangaDownloadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaDownloadPageRoutingModule {}
