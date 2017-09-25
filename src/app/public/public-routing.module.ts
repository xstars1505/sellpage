import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home.component";
import { PublicComponent } from "./public.component";
import { WomenClothsComponent } from "./components/women-cloths.component";
import { ProductDetailsResolver } from "./services/product-details.resolver";
import { ProductDetailsComponent } from "./components/product-details.component";

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
          path: 'products/:category',
          component: ProductDetailsComponent,
          resolve: {
            data: ProductDetailsResolver
          }
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
