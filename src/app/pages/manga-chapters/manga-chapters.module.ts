import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangaChaptersPageRoutingModule } from './manga-chapters-routing.module';

import { MangaChaptersPage } from './manga-chapters.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangaChaptersPageRoutingModule,
    SharedModule
  ],
  declarations: [MangaChaptersPage]
})
export class MangaChaptersPageModule {}
