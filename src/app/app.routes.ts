import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'products', loadChildren: () => import('./products/features/routes/products.routes')}, 
    {path: '**', redirectTo: 'products'}
];
