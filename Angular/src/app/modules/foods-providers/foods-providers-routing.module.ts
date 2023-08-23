import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderLayoutComponent } from './layouts/provider-layout/provider-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { ProviderResitrationComponent } from './pages/provider-resitration/provider-resitration.component';
import { ProviderLoginComponent } from './pages/provider-login/provider-login.component';
import { ProviderProfileComponent } from './pages/provider-profile/provider-profile.component';
import { AddFoodComponent } from './pages/add-food/add-food.component';
import { UpdateFoodComponent } from './pages/update-food/update-food.component';
import { ViewFoodsComponent } from './pages/view-foods/view-foods.component';
import { AllStatusComponent } from './components/all-status/all-status.component';
import { OrderfoodComponent } from './pages/orderfood/orderfood.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { WithdrawnComponent } from './pages/withdrawn/withdrawn.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: ProviderLoginComponent,
      },
      {
        path: 'login',
        component: ProviderLoginComponent,
      },
      {
        path: 'reg',
        component: ProviderResitrationComponent,
      },
    ],
  },
  {
    path: 'shop',
    component: ProviderLayoutComponent,
    children: [
      {
        path:'',
        component:AllStatusComponent
      },
      {
        path: 'profile',
        component: ProviderProfileComponent,
      },
      {
        path:'addfood',
        component:AddFoodComponent
      },
      {
        path:'updatefood/:id',
        component:UpdateFoodComponent
      },
      {
        path:'viewfoods',
        component:ViewFoodsComponent
      },
      {
        path:'orfood',
        component:OrderfoodComponent
      },
      {
        path:'orderdetails/:id/:oid/:uid',
        component:OrderDetailsComponent
      },
      {
        path:'withdrawn',
        component:WithdrawnComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodsProvidersRoutingModule {}
