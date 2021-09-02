import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangaDownloadPageRoutingModule } from './manga-download-routing.module';

import { MangaDownloadPage } from './manga-download.page';
import { SharedModule } from 'src/app/components/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangaDownloadPageRoutingModule,
    SharedModule
  ],
  declarations: [MangaDownloadPage]
})
export class MangaDownloadPageModule {}
