import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductDetailsService } from "./product-details.service";
@Injectable()
export class ProductsResolver implements Resolve<string> {
  constructor(private productDetailsService: ProductDetailsService) { }
  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<any> {
    return this.productDetailsService.getProducts(route.params.category);
  }
}