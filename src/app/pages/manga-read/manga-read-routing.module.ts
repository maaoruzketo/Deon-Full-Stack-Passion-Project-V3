import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangaReadPage } from './manga-read.page';

const routes: Routes = [
  {
    path: '',
    component: MangaReadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaReadPageRoutingModule {}
