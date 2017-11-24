/*
  https://github.com/maiyaporn/angular2-wizard
 */

import {Component, Input, Output, EventEmitter, OnDestroy, AfterViewInit} from '@angular/core';

@Component({
  selector: 'wizard-step',
  template:
    `
    <div [hidden]="!isActive">
      <ng-content></ng-content>
    </div>
  `
})
export class WizardStepComponent implements OnDestroy, AfterViewInit {
  @Input() title: string;
  @Input() icon: string;
  @Input() hidden: boolean = false;
  @Input() isValid: boolean = true;
  @Input() showNext: boolean = true;
  @Input() showPrev: boolean = true;

  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() onPrev: EventEmitter<any> = new EventEmitter<any>();
  @Output() onComplete: EventEmitter<any> = new EventEmitter<any>();

  private _isActive: boolean = false;
  isDisabled: boolean = true;

  constructor() {

  }

  ngAfterViewInit() {
    console.log('from: ' +  this.title)
  }

  @Input('isActive')
  set isActive(isActive: boolean) {
    this._isActive = isActive;
    this.isDisabled = false;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  ngOnDestroy() {
    this.isDisabled = true;
  }

}
