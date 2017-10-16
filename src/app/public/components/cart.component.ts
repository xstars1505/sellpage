import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CartService } from '../services/cart.service';
import { DataSource } from '@angular/cdk/table';

@Component({
    moduleId: module.id,
    selector: 'app-cart',
    templateUrl: 'cart.component.html',
    styleUrls: ['cart.component.scss']
})
export class CartComponent implements OnInit {
    dataSource;
    items = [];
    displayedColumns = ['product', 'details', 'quantity', 'discount'];

    constructor (private cartService: CartService) {}
    ngOnInit() {
        this.dataSource = new CartDataSource(this.cartService);
    }

}

export class CartDataSource extends DataSource<any> {
    constructor (private cartService: CartService) {
        super();
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<any[]> {
        return this.cartService.getProducts();
    }

    disconnect() {}
}