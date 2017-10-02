import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'app-product-details',
    templateUrl: 'products.component.html',
    styleUrls: ['./products.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent implements OnInit, OnDestroy {
    productDetails;
    previewProduct = {};
    p=1;
    selectedImage = '';
    itemsPerPage = 12;
    category;
    subscription: Subscription;
    constructor(private activeRoute:ActivatedRoute, private route: Router, private modalService:NgbModal) {
        this.subscription = this.activeRoute.data.subscribe(val => {
            this.productDetails = val["data"];
        })
    }

    ngOnInit() {

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    open(content, product, event) {
        event.stopPropagation();
        this.previewProduct = product;
        this.selectedImage = product.extraImages[0];
        this.modalService.open(content, {size: 'lg', windowClass: 'quick-view-modal'}); //no animation for now (lib error)
    }

    displayImage(link) {
        this.selectedImage = link;
    }

    goToProductDetails(product) {
        this.route.navigate(['/products', this.activeRoute.snapshot.params['category'], product.id]);
    }

}