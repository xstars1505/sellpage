import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CartService } from './cart.service';

@Injectable()
export class CartResolver implements Resolve<string> {
    constructor(private cartService: CartService) { }
    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<any> {
        return this.cartService.getProducts();
    }
}