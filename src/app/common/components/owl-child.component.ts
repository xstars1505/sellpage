import {OnDestroy, Component, Input, ElementRef, HostBinding} from "@angular/core";
import 'owl.carousel';
declare var $: any,jQuery: any;
@Component({
    selector: 'owl-carousel-child',
    template: '<ng-content></ng-content>'
})
export class OwlChild  implements OnDestroy {
    @HostBinding('class') owlClass = 'owl-carousel';
    $owl: any;
    @Input() options: any = {};

    constructor(private el: ElementRef) {
        $ = $ || jQuery;
    }

    ngAfterViewInit() {
        if($) {
            this.$owl = $('.owl-carousel').owlCarousel({
                loop:false,
                item:1,
                nav: true,
                dots: true,
                margin:10,

            });
        }
    }

    trigger(action: string, options?: any[]) {
        this.$owl.trigger(action, {
            loop:false,
            item:1,
            nav: true,
            dots: true,
            margin:10,

        })
    }

    ngOnDestroy() {
        this.$owl.trigger('destroy.owl.carousel').removeClass('owl-loaded');
        delete this.$owl;
    }
}