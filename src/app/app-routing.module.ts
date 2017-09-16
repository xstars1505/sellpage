import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export let routes: Routes = [
  { path: 'home', loadChildren: './public/public.module#PublicModule'},
  { path: '', redirectTo: 'home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
