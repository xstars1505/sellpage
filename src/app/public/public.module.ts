import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { PublicRoutingModule } from './public-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Libs
import { ImageZoomContainer } from '../common/components/image-zoom-container.component';
import { ImageZoomLens } from '../common/components/image-zoom-lens.component';
import { ImageZoom } from '../common/components/image-zoom.directive';
import { OwlModule } from 'ngx-owl-carousel';

//Component
import { PublicComponent } from './public.component';
import { NavBarComponent } from "../common/components/nav-bar.component";
import { FooterComponent } from "../common/components/footer.component";
import { HomeComponent } from "./components/home.component";
import { ProductsResolver } from "./services/products.resolver";
import { ProductDetailsService } from "./services/product-details.service";
import { ProductsComponent } from "./components/products.component";
import { ProductDetailsResolver } from './services/product-details.resolver';
import { ProductDetailsComponent } from './components/product-details.component';
import { CartComponent } from './components/cart.component';
import { CartResolver } from './services/cart.resolver';
import { CartService } from './services/cart.service';
import { CheckoutComponent } from './components/checkout.component';
import { MatStepperModule } from '@angular/material/stepper';
import {WizardComponent} from "../common/components/wizard.component";
import {WizardStepComponent} from "../common/components/wizard-step.component";

@NgModule({
    imports: [
        CommonModule,
        PublicRoutingModule,
        FormsModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        FormsModule,
        OwlModule,
        MatStepperModule
    ],
    declarations: [
        PublicComponent,
        HomeComponent,
        ProductsComponent,
        ProductDetailsComponent,
        NavBarComponent,
        FooterComponent,
        ImageZoomContainer,
        ImageZoomLens,
        ImageZoom,
        CartComponent,
        CheckoutComponent,
        WizardComponent,
        WizardStepComponent
    ],
    entryComponents: [ImageZoomContainer, ImageZoomLens,],
    providers: [ProductDetailsService, ProductsResolver, ProductDetailsResolver, CartResolver, CartService]
})
export class PublicModule {
}
