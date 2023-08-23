import { Component } from '@angular/core';
import { ProvidersService } from '../../services/providers.service';
import { Shop } from '../../models/shop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-login',
  templateUrl: './provider-login.component.html',
  styleUrls: ['./provider-login.component.css']
})
export class ProviderLoginComponent {
  shopId: any;
  shopFullName: any;
  shopUserName: any;
  shopType: any;
  shopEmail: any;
  shopPhone: any;
  shopAddress: any;
  shopPassword: any;
  shopArray: any;

  constructor(private pService: ProvidersService, private router:Router) {
    this.shopUserName = localStorage.getItem("shopUsername");
    if (this.shopUserName != null) {
      router.navigate(['provider','shop']);
    }
  }

  shopLogin() {
    this.shopArray = new Shop(this.shopId, this.shopFullName, this.shopUserName, this.shopType, this.shopEmail, this.shopPhone, this.shopAddress, this.shopPassword);
    this.pService.loginCheckShop(this.shopArray)
    .subscribe((data)=>{
        console.log(data)
        let d: any = data;
        console.log(d.status);
        if(d.status == "success"){
          localStorage.setItem("shopUsername", this.shopUserName);
          this.router.navigate(['provider','shop']);
        }else{
          // this.toast.error({detail:"Warning", summary:'user name or password is wrong!', duration:5000, position:'topRight'});
        }
    });
  }
}
