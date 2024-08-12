import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ProductModel } from "../../shared/Model/ProductsModel";



@Injectable({
    providedIn: 'root'
})
export class ShopService {
    
    //It is an observable to drive our products list
    private cart = new BehaviorSubject<ProductModel []>([]);

    cart$ = this.cart.asObservable();


}