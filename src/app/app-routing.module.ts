import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export let routes: Routes = [
  { path: '', loadChildren: './public/public.module#PublicModule'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
