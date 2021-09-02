import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComicChaptersPageRoutingModule } from './comic-chapters-routing.module';

import { ComicChaptersPage } from './comic-chapters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComicChaptersPageRoutingModule
  ],
  declarations: [ComicChaptersPage]
})
export class ComicChaptersPageModule {}
