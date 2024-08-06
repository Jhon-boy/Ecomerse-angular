import { inject, Injectable } from "@angular/core";
import { ProductModel } from "../../shared/Model/ProductsModel";
import { signalSlice } from "ngxtension/signal-slice";
import { ProductService } from "./Products.Service";
import { map } from "rxjs";

/**
 * Initial state 
 */
interface State {
    products: ProductModel[],
    status: 'loading'| 'success' | 'error';
}
@Injectable()
export class ProductStateService{

    private productService = inject(ProductService);
    
    private initialState: State = {
        products: [],
        status: 'loading' as const
    }

    state = signalSlice({
        initialState: this.initialState,
        sources: [
            this.productService
            .getProducts()
            .pipe(map((products) => ({ products,  status: 'success' as const }))),
        ]
    })
}