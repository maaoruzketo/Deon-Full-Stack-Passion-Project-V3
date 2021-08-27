import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicRecommendationsPage } from './comic-recommendations.page';

const routes: Routes = [
  {
    path: '',
    component: ComicRecommendationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicRecommendationsPageRoutingModule {}
