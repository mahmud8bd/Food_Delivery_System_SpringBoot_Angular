import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { ViewFoodsComponent } from './pages/view-foods/view-foods.component';
import { UpdateFoodComponent } from './pages/update-food/update-food.component';
import { AddFoodComponent } from './pages/add-food/add-food.component';
import { RegistrationAdminComponent } from './pages/registration-admin/registration-admin.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RidersComponent } from './pages/riders/riders.component';
import { ProviderLayoutComponent } from '../foods-providers/layouts/provider-layout/provider-layout.component';
import { UsersComponent } from './pages/users/users.component';
import { ProvidersComponent } from './pages/providers/providers.component';
import { RequestWithdrawComponent } from './pages/request-withdraw/request-withdraw.component';

const routes: Routes = [
  {
    path:'',
    component:DefaultLayoutComponent,
    children:[
      {
        path:'',
        component:LoginComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'reg',
        component:RegistrationAdminComponent
      }
    ]
  },
  {
    path:'dash',
    component:DashboardLayoutComponent,
    children:[
      {
        path:'',
        component:AnalysisComponent
      },
      {
        path:'foods',
        component:ViewFoodsComponent
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
        path:'order',
        component:OrdersComponent
      },
      {
        path:'rider',
        component:RidersComponent
      },
      {
        path:'setting',
        component:SettingsComponent
      },
      {
        path:'request-withdraw',
        component:RequestWithdrawComponent
      },
      {
        path:'provider',
        component:ProvidersComponent
      },
      {
        path:'users',
        component:UsersComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
