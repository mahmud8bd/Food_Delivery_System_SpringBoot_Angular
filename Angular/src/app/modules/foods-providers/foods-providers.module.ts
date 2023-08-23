import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodsProvidersRoutingModule } from './foods-providers-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { ProviderLoginComponent } from './pages/provider-login/provider-login.component';
import { ProviderLayoutComponent } from './layouts/provider-layout/provider-layout.component';
import { ProviderResitrationComponent } from './pages/provider-resitration/provider-resitration.component';
import { AddFoodComponent } from './pages/add-food/add-food.component';
import { UpdateFoodComponent } from './pages/update-food/update-food.component';
import { ViewFoodsComponent } from './pages/view-foods/view-foods.component';
import { ProviderProfileComponent } from './pages/provider-profile/provider-profile.component';
import { AllStatusComponent } from './components/all-status/all-status.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProvidersService } from './services/providers.service';
import { AdminService } from '../admin/services/admin.service';
import { OrderfoodComponent } from './pages/orderfood/orderfood.component';
import { HomeService } from '../home/services/home.service';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { ImageUploadService } from '../share/service/image-upload.service';
import { AutoIdService } from '../share/service/auto-id.service';
import { WithdrawnComponent } from './pages/withdrawn/withdrawn.component';
import { TransectionService } from '../admin/services/transection.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { EmailSenderService } from '../share/service/email-sender.service';
import { WebSocketService } from '../share/service/web-socket.service';


@NgModule({
  declarations: [
    FooterComponent,
    DefaultLayoutComponent,
    ProviderLoginComponent,
    ProviderLayoutComponent,
    ProviderResitrationComponent,
    AddFoodComponent,
    UpdateFoodComponent,
    ViewFoodsComponent,
    ProviderProfileComponent,
    AllStatusComponent,
    OrderfoodComponent,
    OrderDetailsComponent,
    WithdrawnComponent
  ],
  imports: [
    CommonModule,
    FoodsProvidersRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgApexchartsModule
  ],
  providers:[
    ProvidersService,
    AdminService,
    HomeService,
    ImageUploadService,
    AutoIdService,
    TransectionService,
    EmailSenderService,
    WebSocketService
  ]
})
export class FoodsProvidersModule { }
