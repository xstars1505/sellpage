import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-cart',
    templateUrl: 'cart.component.html',
    styleUrls: ['cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
    subscription:Subscription;
    data;
    couponCode: string;
    discount: number = 0;
    errorMess: string;

    constructor(private cartService:CartService, private activeRoute:ActivatedRoute) {
        this.subscription = this.activeRoute.data.subscribe(val => {
            this.data = val["data"];
        })
    }

    ngOnInit() {

    }

    applyCouponCode(couponCode) {
        this.cartService.applyCouponCode(couponCode).subscribe(
          data => {
            this.discount = data;
            this.getTotalPrice();
          },
          error => {
            this.errorMess = error;
          }
        );
    }

    increaseQuantity(product) {
        product.quantity++;
    }

    decreaseQuantity(product) {
        if (product.quantity > 1) {
            product.quantity--;
        }
    }

    removeProduct(product) {
        this.cartService.removeProduct(product);
    }

    getProductPrice(product) {
        return product.onSale ? product.quantity*(product.price*(1-product.onSale/100)) : product.price*product.quantity;
    }

    getTotalPrice() {
        let total = 0;
        this.data.forEach(product => {
            total = total + this.getProductPrice(product);
        });
        return total*(1-this.discount/100);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}