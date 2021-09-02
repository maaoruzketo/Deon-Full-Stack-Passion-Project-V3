import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangaHomePageRoutingModule } from './manga-home-routing.module';

import { MangaHomePage } from './manga-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangaHomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MangaHomePage]
})
export class MangaHomePageModule {}
