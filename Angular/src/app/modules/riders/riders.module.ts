import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RidersRoutingModule } from './riders-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './pages/orders/orders.component';
import { HomeService } from '../home/services/home.service';
import { AdminService } from '../admin/services/admin.service';
import { ProvidersService } from '../foods-providers/services/providers.service';
import { OrdersDetailsComponent } from './pages/orders-details/orders-details.component';
import { WithdrawnComponent } from './pages/withdrawn/withdrawn.component';


@NgModule({
  declarations: [
    OrdersComponent,
    OrdersDetailsComponent,
    WithdrawnComponent
  ],
  imports: [
    CommonModule,
    RidersRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HomeService,
    AdminService,
    ProvidersService
  ]
})
export class RidersModule { }
