
import {  Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { BaseHttpService } from "../../shared/data-acces/baseHtttp.Service";
import { Observable, retry } from "rxjs";
import { ProductModel } from "../../shared/Model/ProductsModel";

@Injectable({
    providedIn: 'root'
})
export class ProductService extends BaseHttpService{

    /**
     * Get Data from our API
     */

    LIMIT: number =4;
    paginas: number[] = [1,2,3,4,5,6,7];
    getProducts(pagina: number): Observable<ProductModel[]> {
        return this.http.get<any[]>(`${environment.API_URL}/products`, {
            params: {
                limit: pagina * this.LIMIT
            }
        });
    }

    getPaginacion(): number[] {
        return this.paginas;
    }
}