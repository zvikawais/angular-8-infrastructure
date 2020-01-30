
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'feature-example',
    loadChildren: () =>
      import('./features/feature-example/feature-example.module').then((m) => m.FeatureExampleModule)
  },

  {
    path: 'secure',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/secure-feature/secure-feature.module').then((m) => m.SecureFeatureModule)
  },

  {
    path: '**',
    component: NotFoundComponent
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
