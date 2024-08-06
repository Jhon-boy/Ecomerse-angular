
import { Routes } from "@angular/router";

/*
This is our routes about our components
*/
export default [
    {
        path: '', 
        loadComponent: () => import('../products-list/products-list.component')
    }
] as Routes