import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { PublicRoutingModule } from './public-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

//Libs
import { ImageZoomContainer } from '../common/components/image-zoom-container.component';
import { ImageZoomLens } from '../common/components/image-zoom-lens.component';
import { ImageZoom } from '../common/components/image-zoom.directive';
import { OwlModule } from 'ngx-owl-carousel';
import { MatTableModule } from '@angular/material';

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

@NgModule({
    imports: [
        CommonModule,
        PublicRoutingModule,
        NgxPaginationModule,
        CommonModule,
        FormsModule,
        OwlModule,
        MatTableModule,
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
    ],
    entryComponents: [ImageZoomContainer, ImageZoomLens,],
    providers: [ProductDetailsService, ProductsResolver, ProductDetailsResolver, CartResolver, CartService]
})
export class PublicModule {
}
