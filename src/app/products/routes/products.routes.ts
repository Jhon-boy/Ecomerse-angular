
import { Routes } from "@angular/router";

/*
This is our routes about our components
*/
export default [
    {
        path: '', loadComponent: () => import('../features/products-list/products-list.component'),
    },
    {
        path: ':id', loadComponent: () => import('../features/products-detail/products-detail.component')
    }
] as Routes