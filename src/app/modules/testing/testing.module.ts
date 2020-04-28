import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './pages/testing/testing.component';


@NgModule({
  declarations: [TestingComponent],
  imports: [
    CommonModule,
    TestingRoutingModule,
    SharedModule
  ]
})
export class TestingModule { }
