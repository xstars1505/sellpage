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

@NgModule({
    imports: [
        CommonModule,
        PublicRoutingModule,
        NgxPaginationModule,
        FormsModule
    ],
    declarations: [
        PublicComponent,
        HomeComponent,
        WomenClothsComponent,
        ProductsComponent,
        ProductDetailsComponent,
        NavBarComponent,
        FooterComponent
    ],
    providers: [ProductDetailsService, ProductsResolver, ProductDetailsResolver]
})
export class PublicModule {
}
