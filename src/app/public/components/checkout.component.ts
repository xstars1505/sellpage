import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'app-checkout',
    templateUrl: 'checkout.component.html',
    styleUrls: ['checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  shippingForm: any;

  constructor(private _formBuilder: FormBuilder) {
    this.shippingForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
    });
  }


  ngOnInit() {

  }

}
