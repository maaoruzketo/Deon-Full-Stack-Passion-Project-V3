import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookInfoPage } from './book-info.page';

const routes: Routes = [
  {
    path: '',
    component: BookInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookInfoPageRoutingModule {}
