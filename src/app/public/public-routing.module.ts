import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home.component";
import { PublicComponent } from "./public.component";
import { WomenClothsComponent } from "./components/women-cloths.component";
import { ProductsResolver } from "./services/products.resolver";
import { ProductsComponent } from "./components/products.component";
import { ProductDetailsComponent } from './components/product-details.component';
import { ProductDetailsResolver } from './services/product-details.resolver';

let routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forChild([
    {
      path: '',
      component: PublicComponent,
      children: [
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'products/:category/:productId',
          component: ProductDetailsComponent,
          resolve: {
            data: ProductDetailsResolver
          }
        },
        {
          path: 'products/:category',
          component: ProductsComponent,
          resolve: {
            data: ProductsResolver
          },
          children: [
            {
              path: ':productId',
              component: ProductDetailsComponent,
              resolve: {
                data: ProductDetailsResolver
              }
            }
          ]
        },
        {
          path: 'women-cloths',
          component: WomenClothsComponent
        },
      ]
    }
  ])],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
