import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class ProductDetailsService {

    constructor() { }

    getProductDetails(category: String) {
      let mockData:string = "";
      return new Observable(observer => {
        setTimeout(() => {
          console.log("Resolved Observable");
          mockData = "Mock Data String (O)";
          observer.next(mockData);
          console.log("Emitted new Observable data");
          setTimeout(() => {
            console.log("Completing Observable");
            observer.complete();
          }, 1000);
        }, 2000);
      });
    }
}