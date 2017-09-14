import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ScrollSpyModule } from 'ngx-scrollspy';
import { PublicModule } from "./components/public/public.module";
import { NguiScrollableModule } from '@ngui/scrollable';
import { Ng2ScrollableModule } from 'ng2-scrollable';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NguiScrollableModule,
    PublicModule,
    NgbModule.forRoot(),
    ScrollSpyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
