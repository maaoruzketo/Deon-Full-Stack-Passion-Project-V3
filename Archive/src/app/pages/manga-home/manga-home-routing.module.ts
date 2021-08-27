import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangaHomePage } from './manga-home.page';

const routes: Routes = [
  {
    path: '',
    component: MangaHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaHomePageRoutingModule {}
