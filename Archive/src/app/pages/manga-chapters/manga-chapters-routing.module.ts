import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangaChaptersPage } from './manga-chapters.page';

const routes: Routes = [
  {
    path: '',
    component: MangaChaptersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaChaptersPageRoutingModule {}
