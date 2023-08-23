import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { FoodsComponent } from './pages/foods/foods.component';
import { FoodDetailsComponent } from './pages/food-details/food-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { TermsComponent } from './pages/terms/terms.component';
import { FoodsCartComponent } from './pages/foods-cart/foods-cart.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserResigtrationComponent } from './pages/user-resigtration/user-resigtration.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { MyShoppingComponent } from './pages/my-shopping/my-shopping.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { MyprofileDetailsComponent } from './pages/user-profile/myprofile-details/myprofile-details.component';
import { MyOrderDetailsComponent } from './pages/user-profile/my-order-details/my-order-details.component';
import { MyOrderComponent } from './pages/user-profile/my-order/my-order.component';
import { OrderTacComponent } from './pages/user-profile/order-tac/order-tac.component';

const routes: Routes = [
  {
    path:'',
    component:DefaultLayoutComponent,
    children:[
      {
        path:'',
        component:FoodsComponent
      },
      {
        path:'foodsview',
        component:FoodsComponent
      },
      {
        path:'userlogin',
        component:UserLoginComponent
      },
      {
        path:'details/:id',
        component:FoodDetailsComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'term',
        component:TermsComponent
      },
      {
        path:'cart',
        component:FoodsCartComponent
      },
      {
        path:'userprofile',
        component:UserProfileComponent,
        children:[
          {
            path:'',
            component:MyprofileDetailsComponent
          },
          {
            path:'myprofiledetails',
            component:MyprofileDetailsComponent
          },
          {
            path:'myorder',
            component:MyOrderComponent
          },
          {
            path:'myorderdetails/:id',
            component:MyOrderDetailsComponent
          },
          {
            path:'ortac/:id',
            component:OrderTacComponent
          }
        ]
      },
      {
        path:'user-reg',
        component:UserResigtrationComponent
      },
      {
        path:'checkout',
        component:CheckoutComponent
      },
      {
        path:'myorder',
        component:MyShoppingComponent
      },
      {
        path:'invoice/:invoiceno',
        component:InvoiceComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
