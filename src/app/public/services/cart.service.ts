import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class CartService {

    constructor() { }

    getProducts(): Observable<SelectedProduct[]> {
        let mockData = [
            {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
            {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
        ];
        return new Observable(observer => {
            setTimeout(() => {
                observer.next(mockData);
                // Must have complete() for resolver to run properly
                observer.complete();
            }, 2000);
        });
    }
}

export interface SelectedProduct {
    product: string;
    position: number;
    weight: number;
    symbol: string;
}