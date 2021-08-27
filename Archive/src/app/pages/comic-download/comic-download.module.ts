import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComicDownloadPageRoutingModule } from './comic-download-routing.module';

import { ComicDownloadPage } from './comic-download.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComicDownloadPageRoutingModule
  ],
  declarations: [ComicDownloadPage]
})
export class ComicDownloadPageModule {}
