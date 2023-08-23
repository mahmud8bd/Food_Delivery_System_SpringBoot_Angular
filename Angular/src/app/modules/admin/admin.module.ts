import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { AdminService } from './services/admin.service';
import { AddFoodComponent } from './pages/add-food/add-food.component';
import { ViewFoodsComponent } from './pages/view-foods/view-foods.component';
import { UpdateFoodComponent } from './pages/update-food/update-food.component';
import { RegistrationAdminComponent } from './pages/registration-admin/registration-admin.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RidersComponent } from './pages/riders/riders.component';
import { ProvidersComponent } from './pages/providers/providers.component';
import { UsersComponent } from './pages/users/users.component';
import { HomeService } from '../home/services/home.service';
import { ProvidersService } from '../foods-providers/services/providers.service';
import { PromoCodeService } from './services/promo-code.service';
import { TransectionService } from './services/transection.service';
import { ImageUploadService } from '../share/service/image-upload.service';
import { RequestWithdrawComponent } from './pages/request-withdraw/request-withdraw.component';
import { EmailSenderService } from '../share/service/email-sender.service';
import { WebSocketService } from '../share/service/web-socket.service';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DefaultLayoutComponent,
    LoginComponent,
    AnalysisComponent,
    FooterComponent,
    AddFoodComponent,
    ViewFoodsComponent,
    UpdateFoodComponent,
    RegistrationAdminComponent,
    AdminProfileComponent,
    OrdersComponent,
    SettingsComponent,
    RidersComponent,
    ProvidersComponent,
    UsersComponent,
    RequestWithdrawComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[
    AdminService,
    HomeService,
    ProvidersService,
    PromoCodeService,
    TransectionService,
    ImageUploadService,
    EmailSenderService,
    WebSocketService
  ]
})
export class AdminModule { }
