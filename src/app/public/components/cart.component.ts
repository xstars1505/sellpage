import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-cart',
    templateUrl: 'cart.component.html',
    styleUrls: ['cart.component.scss']
})
export class CartComponent implements OnInit {
    items = [];
    constructor() { }

    ngOnInit() { }

}