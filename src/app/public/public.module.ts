import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { NavBarComponent } from "../common/components/nav-bar.component";
import { FooterComponent } from "../common/components/footer.component";
import { HomeComponent } from "./components/home.component";
import { WomenClothsComponent } from "./components/women-cloths.component";
import { ProductDetailsResolver } from "./services/product-details.resolver";
import { ProductDetailsService } from "./services/product-details.service";
import { ProductsComponent } from "./components/products.component";
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
      NgxPaginationModule
  ],
  declarations: [
    PublicComponent,
    HomeComponent,
    WomenClothsComponent,
    ProductsComponent,
    NavBarComponent,
    FooterComponent
  ],
  providers: [ProductDetailsService, ProductDetailsResolver]
})
export class PublicModule { }
