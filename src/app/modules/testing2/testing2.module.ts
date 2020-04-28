import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Testing2PageRoutingModule } from './testing2-routing.module';

import { Testing2Page } from './testing2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Testing2PageRoutingModule
  ],
  declarations: [Testing2Page]
})
export class Testing2PageModule {}
