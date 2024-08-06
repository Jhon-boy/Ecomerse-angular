import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";

/**
 * Service base to use in other service
 */
@Injectable({
    providedIn: 'root'
})
export class BaseHttpService {
    http = inject(HttpClient);
    apiRul = environment.API_URL;
}