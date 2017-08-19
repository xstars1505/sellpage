import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicModule } from "./components/public/public.module";

let routes: Routes = [
  { path: '', loadChildren: () => PublicModule},
  { path: '', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


