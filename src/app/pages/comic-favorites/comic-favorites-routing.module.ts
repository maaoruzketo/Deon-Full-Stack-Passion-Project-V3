import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicFavoritesPage } from './comic-favorites.page';

const routes: Routes = [
  {
    path: '',
    component: ComicFavoritesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicFavoritesPageRoutingModule {}
