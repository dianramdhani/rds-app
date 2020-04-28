import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'testing',
    pathMatch: 'full'
  },
  {
    path: 'testing',
    loadChildren: () => import('./modules/testing/testing.module').then( m => m.TestingPageModule)
  },
  {
    path: 'testing2',
    loadChildren: () => import('./modules/testing2/testing2.module').then( m => m.Testing2PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
