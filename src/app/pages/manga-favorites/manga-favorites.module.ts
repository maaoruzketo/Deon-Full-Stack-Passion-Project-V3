import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangaFavoritesPageRoutingModule } from './manga-favorites-routing.module';

import { MangaFavoritesPage } from './manga-favorites.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangaFavoritesPageRoutingModule,
    SharedModule
  ],
  declarations: [MangaFavoritesPage]
})
export class MangaFavoritesPageModule {}
