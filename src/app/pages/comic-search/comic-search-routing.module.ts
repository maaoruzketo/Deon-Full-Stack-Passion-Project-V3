import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicSearchPage } from './comic-search.page';

const routes: Routes = [
  {
    path: '',
    component: ComicSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicSearchPageRoutingModule {}
