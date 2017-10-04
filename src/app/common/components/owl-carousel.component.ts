//import $ from 'jquery';
import 'owl.carousel';
declare var $: any,jQuery: any;
import { Component, Input, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'owl-carousel',
    template: `<ng-content></ng-content>`
})
export class OwlCarousel implements OnDestroy, AfterViewInit{
    @Input() options: Object;

    $owlElement: any;

    defaultOptions: Object = {};

    constructor(private el: ElementRef) {}

    ngAfterViewInit() {
        for (var key in this.options) {
            this.defaultOptions[key] = this.options[key];
        }
        var temp :any;
        temp = $(this.el.nativeElement);

        this.$owlElement = temp.owlCarousel({navigation: true});
    }

    ngOnDestroy() {
        this.$owlElement.data('owlCarousel').destroy();
        this.$owlElement = null;
    }
}