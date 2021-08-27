import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookInfoPageRoutingModule } from './book-info-routing.module';

import { BookInfoPage } from './book-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookInfoPageRoutingModule
  ],
  declarations: [BookInfoPage]
})
export class BookInfoPageModule {}
