import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangaSearchPageRoutingModule } from './manga-search-routing.module';

import { MangaSearchPage } from './manga-search.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangaSearchPageRoutingModule,
    SharedModule
  ],
  declarations: [MangaSearchPage]
})
export class MangaSearchPageModule {}
