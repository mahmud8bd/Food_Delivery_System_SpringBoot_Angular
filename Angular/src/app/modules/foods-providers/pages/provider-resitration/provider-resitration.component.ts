import { Component } from '@angular/core';
import { ProvidersService } from '../../services/providers.service';
import { Shop } from '../../models/shop';

@Component({
  selector: 'app-provider-resitration',
  templateUrl: './provider-resitration.component.html',
  styleUrls: ['./provider-resitration.component.css'],
})
export class ProviderResitrationComponent {
  shopId: any;
  shopFullName: any;
  shopUserName: any;
  shopType: any;
  shopEmail: any;
  shopPhone: any;
  shopAddress: any;
  shopPassword: any;
  shopArray: any;

  constructor(private pService: ProvidersService) {}

  addShop() {
    this.shopArray = new Shop(
      this.shopId,
      this.shopFullName,
      this.shopUserName,
      this.shopType,
      this.shopEmail,
      this.shopPhone,
      this.shopAddress,
      this.shopPassword
    );
    this.pService
      .addShop(this.shopArray)
      .subscribe((data) => console.log('success', data));
  }
}
