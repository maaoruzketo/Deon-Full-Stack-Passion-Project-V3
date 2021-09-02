import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangaRecommendationsPageRoutingModule } from './manga-recommendations-routing.module';

import { MangaRecommendationsPage } from './manga-recommendations.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangaRecommendationsPageRoutingModule,
    SharedModule
  ],
  declarations: [MangaRecommendationsPage]
})
export class MangaRecommendationsPageModule {}
