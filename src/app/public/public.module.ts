import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { NavBarComponent } from "../common/components/nav-bar.component";
import { FooterComponent } from "../common/components/footer.component";
import { HomeComponent } from "./components/home.component";
import { WomenClothsComponent } from "./components/women-cloths.component";
import { ProductsResolver } from "./services/products.resolver";
import { ProductDetailsService } from "./services/product-details.service";
import { ProductsComponent } from "./components/products.component";
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ProductDetailsResolver } from './services/product-details.resolver';
import { ProductDetailsComponent } from './components/product-details.component';
import { ImageZoomContainer } from '../common/components/image-zoom-container.component';
import { ImageZoomLens } from '../common/components/image-zoom-lens.component';
import { ImageZoom } from '../common/components/image-zoom.directive';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
    imports: [
        CommonModule,
        PublicRoutingModule,
        NgxPaginationModule,
        CommonModule,
        FormsModule,
       OwlModule,
    ],
    declarations: [
        PublicComponent,
        HomeComponent,
        WomenClothsComponent,
        ProductsComponent,
        ProductDetailsComponent,
        NavBarComponent,
        FooterComponent,
        ImageZoomContainer,
        ImageZoomLens,
        ImageZoom,
    ],
    entryComponents: [ImageZoomContainer, ImageZoomLens,],
    providers: [ProductDetailsService, ProductsResolver, ProductDetailsResolver, ]
})
export class PublicModule {
}
