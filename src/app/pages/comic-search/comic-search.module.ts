import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComicSearchPageRoutingModule } from './comic-search-routing.module';

import { ComicSearchPage } from './comic-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComicSearchPageRoutingModule
  ],
  declarations: [ComicSearchPage]
})
export class ComicSearchPageModule {}
