import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'app-product-details',
    templateUrl: 'product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    productDetails;
    constructor(private activeRoute:ActivatedRoute, private rout: Router, private modalService:NgbModal) {
        this.activeRoute.data.subscribe(val => {
            this.productDetails = val["data"];
        });
    }

    ngOnInit() {

    }




}