import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './pages/orders/orders.component';
import { OrdersDetailsComponent } from './pages/orders-details/orders-details.component';

const routes: Routes = [
  {
    path:'',
    component:OrdersComponent
  },
  {
    path:'orderdetails/:id/:oid/:uid',
    component:OrdersDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RidersRoutingModule { }
