import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComicFavoritesPageRoutingModule } from './comic-favorites-routing.module';

import { ComicFavoritesPage } from './comic-favorites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComicFavoritesPageRoutingModule
  ],
  declarations: [ComicFavoritesPage]
})
export class ComicFavoritesPageModule {}
