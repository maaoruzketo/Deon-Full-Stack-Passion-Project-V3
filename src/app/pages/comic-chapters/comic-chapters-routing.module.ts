import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicChaptersPage } from './comic-chapters.page';

const routes: Routes = [
  {
    path: '',
    component: ComicChaptersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicChaptersPageRoutingModule {}
