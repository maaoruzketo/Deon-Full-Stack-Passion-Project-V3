import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangaFavoritesPage } from './manga-favorites.page';

const routes: Routes = [
  {
    path: '',
    component: MangaFavoritesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaFavoritesPageRoutingModule {}
