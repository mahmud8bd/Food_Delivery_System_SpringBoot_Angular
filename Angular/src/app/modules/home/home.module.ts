import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FoodsComponent } from './pages/foods/foods.component';
import { FoodDetailsComponent } from './pages/food-details/food-details.component';
import { HomeService } from './services/home.service';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { TermsComponent } from './pages/terms/terms.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserResigtrationComponent } from './pages/user-resigtration/user-resigtration.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { FoodsCartComponent } from './pages/foods-cart/foods-cart.component';
import { MyShoppingComponent } from './pages/my-shopping/my-shopping.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { FormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartService } from './services/cart.service';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { NumberToWordsPipe } from '../share/pipes/number-to-words.pipe';
import { MyOrderComponent } from './pages/user-profile/my-order/my-order.component';
import { MyOrderDetailsComponent } from './pages/user-profile/my-order-details/my-order-details.component';
import { MyprofileDetailsComponent } from './pages/user-profile/myprofile-details/myprofile-details.component';
import { ProvidersService } from '../foods-providers/services/providers.service';
import { OrderTacComponent } from './pages/user-profile/order-tac/order-tac.component';
import { PromoCodeService } from '../admin/services/promo-code.service';
import { TransectionService } from '../admin/services/transection.service';
import { ImageUploadService } from '../share/service/image-upload.service';
import { AutoIdService } from '../share/service/auto-id.service';
import { WebSocketService } from '../share/service/web-socket.service';


@NgModule({
  declarations: [
    DefaultLayoutComponent,
    CarouselComponent,
    FoodsComponent,
    FoodDetailsComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    TermsComponent,
    UserLoginComponent,
    UserResigtrationComponent,
    UserProfileComponent,
    FoodsCartComponent,
    MyShoppingComponent,
    LoginLayoutComponent,
    CheckoutComponent,
    InvoiceComponent,
    NumberToWordsPipe,
    MyOrderComponent,
    MyOrderDetailsComponent,
    MyprofileDetailsComponent,
    OrderTacComponent
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    NgToastModule
  ],
  providers: [
    HomeService,
    CartService,
    ProvidersService,
    PromoCodeService,
    TransectionService,
    ImageUploadService,
    AutoIdService,
    WebSocketService
  ],
})
export class HomeModule { }
