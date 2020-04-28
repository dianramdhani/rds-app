import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Testing2Page } from './testing2.page';

const routes: Routes = [
  {
    path: '',
    component: Testing2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Testing2PageRoutingModule {}
