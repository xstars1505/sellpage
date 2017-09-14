import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export let routes: Routes = [
  { path: '', loadChildren: './components/public/public.module#PublicModule'},
  { path: '', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
