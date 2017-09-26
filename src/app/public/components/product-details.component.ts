import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'app-product-details',
    templateUrl: 'product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ProductDetailsComponent implements OnInit {
    productDetails;
    previewProduct;
    constructor(private route:ActivatedRoute, private modalService:NgbModal) {
        this.route.data.subscribe(val => {
            this.productDetails = val["data"];
        });
    }

    ngOnInit() {

    }

    open(content, product) {
        this.previewProduct = product;
        this.modalService.open(content, {size: 'lg', windowClass: 'quick-view-modal'});
    }

}