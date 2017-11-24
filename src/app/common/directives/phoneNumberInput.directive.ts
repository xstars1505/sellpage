import {Directive, HostListener} from '@angular/core';
import {NgControl} from "@angular/forms";

@Directive({selector: '[phone-number-input]'})
export class PhoneNumberInput {
  constructor(public model: NgControl) {
  }

  @HostListener('ngModelChange', ['$event'])
   onModelChange(event: any) {
    this.onInputChange(event);
  }

  onInputChange(event) {
    // remove all mask characters (keep only numeric)
    var newVal = event.replace(/\D/g, '');
    // special handling of backspace necessary otherwise
    // deleting of non-numeric characters is not recognized
    // this laves room for improvement for example if you delete in the
    // middle of the string
    if (event.keyCode === 8) {
      newVal = newVal.substring(0, newVal.length - 1);
    }

    // don't show braces for empty value
    if (newVal.length == 0) {
      newVal = '';
    }
    // don't show braces for empty groups at the end
    else if (newVal.length <= 4) {
      newVal = newVal.replace(/^(\d{0,4})/, '$1');
    } else if (newVal.length <= 7) {
      newVal = newVal.replace(/^(\d{0,4})(\d{0,3})/, '$1 $2');
    } else {
      newVal = newVal.replace(/^(\d{4})(\d{3})(\d{0,4})(\d*$)/, '$1 $2 $3');
    }

    // set the new value
    this.model.valueAccessor.writeValue(newVal);
  }
}
