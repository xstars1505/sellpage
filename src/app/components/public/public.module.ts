import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './components/home.component';
import { NavBarComponent } from "../../common/components/nav-bar.component";

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  declarations: [
    PublicComponent,
    HomeComponent,
    NavBarComponent
  ]
})
export class PublicModule { }
