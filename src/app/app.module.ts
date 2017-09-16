import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { PublicModule } from "./public/public.module";

//Components
import { AppComponent } from './app.component';

//Libs
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {ScrollToModule} from 'ng2-scroll-to';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PublicModule,
    NgbModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
