import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangaReadPageRoutingModule } from './manga-read-routing.module';

import { MangaReadPage } from './manga-read.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangaReadPageRoutingModule
  ],
  declarations: [MangaReadPage]
})
export class MangaReadPageModule {}
