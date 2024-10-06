import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('dashboard/DashboardAppRoutes').then((m) => m.routes),
  },
  /* {
    path: 'dashboard',
    loadComponent: () =>
      import('../components/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  }, */
  {
    path: 'products',
    loadComponent: () =>
      import('../components/products/products.component').then(
        (m) => m.ProductsComponent
      ),
  },
];
