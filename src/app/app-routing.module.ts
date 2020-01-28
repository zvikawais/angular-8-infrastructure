
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
  },
  {
    path: 'example',
    loadChildren: () =>
      import('./features/feature-example/feature-example.module').then((m) => m.FeatureExampleModule)
  },

  {
    path: '**',
    redirectTo: null // todo
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }