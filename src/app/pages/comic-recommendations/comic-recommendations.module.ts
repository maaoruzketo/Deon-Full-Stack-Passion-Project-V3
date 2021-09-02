import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComicRecommendationsPageRoutingModule } from './comic-recommendations-routing.module';

import { ComicRecommendationsPage } from './comic-recommendations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComicRecommendationsPageRoutingModule
  ],
  declarations: [ComicRecommendationsPage]
})
export class ComicRecommendationsPageModule {}
