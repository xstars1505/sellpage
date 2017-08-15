import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from "./components/public/public.component";

const routes: Routes = [
  { path: '', redirectTo: '/public', pathMatch: 'full'},
  { path: 'public', component: PublicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
