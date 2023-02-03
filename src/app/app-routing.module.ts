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
    path: 'carousels',
    loadComponent: () => import('./carousels/carousels.component').then(m => m.CarouselsComponent),
  },
  {
    path: 'datepickers',
    loadComponent: () => import('./datepickers/datepickers.component').then(m => m.DatepickersComponent),
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
