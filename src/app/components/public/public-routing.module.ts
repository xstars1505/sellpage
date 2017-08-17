import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home.component";

const routes: Routes = [
 // { path: 'home', component: HomeComponent },
  {
    path: 'home', component: HomeComponent,

    // children: [
    //
    //   {path: '', component: HomeComponent, pathMatch: 'full'},
    //  // {path: 'payments', loadChildren: 'app/costing/payments/payments.module#PaymentsModule'},
    // //  {path: 'variations', loadChildren: 'app/costing/variations/variations.module#VaritionsModule'}
    // ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
