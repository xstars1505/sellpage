import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class CartService {

    constructor() { }

    getProducts(): Observable<SelectedProduct[]> {
        let mockData = [
            {
                id: 1,
                mainImage: 'http://hunter.ondrejsvestka.cz/1-2/img/detailsmall1.jpg',
                fullName: 'Funky shirt with long name',
                selectedSize: 'Medium',
                price: 143,
                quantity: 2
            },
            {
                id: 2,
                mainImage: 'http://hunter.ondrejsvestka.cz/1-2/img/detailsmall1.jpg',
                fullName: 'Funky shirt with long name',
                selectedSize: 'Medium',
                price: 143,
                onSale: 15, //discount percentage
                quantity: 2
            },
            {
                id: 3,
                mainImage: 'http://hunter.ondrejsvestka.cz/1-2/img/detailsmall1.jpg',
                fullName: 'Funky shirt with long name',
                selectedSize: 'Medium',
                price: 143,
                onSale: 15, //discount percentage
                quantity: 2
            },

        ];
        return new Observable(observer => {
            setTimeout(() => {
                observer.next(mockData);
                // Must have complete() for resolver to run properly
                observer.complete();
            }, 2000);
        });
    }

    applyCouponCode(couponCode: string): Observable<number> {
        return new Observable(observer => {
            setTimeout(() => {
                if (couponCode === '123') {
                    observer.next(15);
                }
                else {
                    observer.error('Wrong code');
                }
                observer.complete();
            }, 2000)
        })
    }

    removeProduct(product) {

    }
}

export interface SelectedProduct {
    id: number,
    mainImage: string,
    fullName: string,
    selectedSize: string,
    price: number,
    onSale: number, //discount percentage
    quantity: number
}