import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BLE } from '@ionic-native/ble/ngx';

import { TestingPageRoutingModule } from './testing-routing.module';
import { TestingPage } from './testing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestingPageRoutingModule
  ],
  declarations: [TestingPage],
  providers: [
    BLE
  ]

})
export class TestingPageModule { }
