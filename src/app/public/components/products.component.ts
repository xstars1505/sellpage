import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'app-product-details',
    templateUrl: 'products.component.html',
    styleUrls: ['./products.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent implements OnInit {
    productDetails;
    previewProduct = {};
    p=1;
    selectedImage = '';
    itemsPerPage = 12;
    constructor(private route:ActivatedRoute, private modalService:NgbModal) {
        this.route.data.subscribe(val => {
            this.productDetails = val["data"];
        });
    }

    ngOnInit() {

    }

    open(content, product) {
        this.previewProduct = product;
        this.selectedImage = product.extraImages[0];
        this.modalService.open(content, {size: 'lg', windowClass: 'quick-view-modal'}); //no animation for now (lib error)
    }

    displayImage(link) {
        this.selectedImage = link;
    }

}