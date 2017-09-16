import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home.component";
import { PublicComponent } from "./public.component";
import { WomenClothsComponent } from "./components/women-cloths.component";

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
          path: 'women-cloths',
          component: WomenClothsComponent
        },
      ]
    }
  ])],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
