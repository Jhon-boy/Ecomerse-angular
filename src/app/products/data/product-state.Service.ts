import { inject, Injectable } from "@angular/core";
import { ProductModel } from "../../shared/Model/ProductsModel";
import { signalSlice } from "ngxtension/signal-slice";
import { ProductService } from "./Products.Service";
import { Subject, catchError, map, of, startWith, switchMap } from 'rxjs';


/**
 * Initial state 
 */
interface State {
  products: ProductModel[],
  selectedProduct: ProductModel |null, 
  status: 'loading' | 'success' | 'error',
  page: number;
}
@Injectable()
export class ProductStateService {

  private productService = inject(ProductService);

  private initialState: State = {
    products: [],
    status: 'loading' as const,
    selectedProduct: null,
    page: 1,
  }


  // this is an Observable to change the value. 
  changesPages = new Subject<number>();

  //Observable to call an product by ID
  productRequest = new Subject<number>();

  // let get all products 
  loadProducts$ = this.changesPages.pipe(
    startWith(2),
    switchMap((page) => this.productService.getProducts(page)),
    map((products) => ({ products, status: 'success' as const })),
    catchError(() => {
      return of({
        products: [],
        status: 'error' as const,
      });
    }),
  );

  // let get all products 
  loadProduct$ = this.productRequest.pipe(
    switchMap((productID) => this.productService.getSingleProduct(productID)),// call our method
    map((selectedProduct) => ({selectedProduct, status: 'success' as const})),
    catchError(() => { // error callback 
      return of({
        selectecProduct: null,
        status: 'error' as const,
      })
    })
  )

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.changesPages.pipe(
        map((page) => ({ page, status: 'loading' as const })),
      ),
      this.loadProducts$,
      this.loadProduct$
    ],
  });

  /**
   * Update the page 
   * @param page 
   */
  updatePage(page: number) {
    this.changesPages.next(page);
  }

  /**
   * Get an single product by ID
   * @param productID 
   */
  getProductById(productID: number) {
    this.productRequest.next(productID);
  }
}