import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangaRecommendationsPage } from './manga-recommendations.page';

const routes: Routes = [
  {
    path: '',
    component: MangaRecommendationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaRecommendationsPageRoutingModule {}
