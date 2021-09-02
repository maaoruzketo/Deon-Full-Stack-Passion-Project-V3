import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from '../button/button.component';


@NgModule({
  declarations: [CardComponent, ButtonComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[CardComponent, ButtonComponent]
})
export class SharedModule { }
