import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  // { path: '**', component: PageNotFoundComponent },
  {
    path: 'buttons',
    loadComponent: () => import('./buttons/buttons.component').then(m => m.ButtonsComponent),
  },
  {
    path: 'selects',
    loadComponent: () => import('./selects/selects.component').then(m => m.SelectsComponent),
  },
  {
    path: 'carousels',
    loadComponent: () => import('./carousels/carousels.component').then(m => m.CarouselsComponent),
  },
  {
    path: 'datepickers',
    loadComponent: () => import('./datepickers/datepickers.component').then(m => m.DatepickersComponent),
  },
  {
    path: 'cards',
    loadComponent: () => import('./cards/cards.component').then(m => m.CardsComponent),
  },
  {
    path: 'schedulers',
    loadComponent: () => import('./schedulers/schedulers.component').then(m => m.SchedulersComponent),
  },
  {
    path: 'loaders',
    loadComponent: () => import('./loaders/loaders.component').then(m => m.LoadersComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: false,
      useHash: true,
    }
    )],
  exports: [RouterModule],
})
export class AppRoutingModule {}
