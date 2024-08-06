
import {  Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { BaseHttpService } from "../../shared/data-acces/baseHtttp.Service";
import { Observable } from "rxjs";
import { ProductModel } from "../../shared/Model/ProductsModel";

@Injectable({
    providedIn: 'root'
})
export class ProductService extends BaseHttpService{

    /**
     * Get Data from our API
     */
    getProducts(): Observable<ProductModel[]> {
        return this.http.get<any[]>(`${environment.API_URL}/products`);
    }
}