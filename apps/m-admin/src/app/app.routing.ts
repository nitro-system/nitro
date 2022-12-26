import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: async () =>
      // eslint-disable-next-line unicorn/no-await-expression-member
      (await import('./modules/home/home.module')).HomeModule,
  },
  {
    path: 'services',
    loadChildren: async () =>
      // eslint-disable-next-line unicorn/no-await-expression-member
      (await import('./modules/services/services.module')).ServicesModule,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
