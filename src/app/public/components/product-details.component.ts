import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-product-details',
    templateUrl: 'product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  resolvedData;
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(val => {
      console.log(val['data'])
      this.resolvedData = val["data"];
    });
  }

  ngOnInit() {

  }
}