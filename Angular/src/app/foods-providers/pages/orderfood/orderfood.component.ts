import { Component } from '@angular/core';
import { ProvidersService } from '../../services/providers.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderfood',
  templateUrl: './orderfood.component.html',
  styleUrls: ['./orderfood.component.css']
})
export class OrderfoodComponent {
  myOrderfood:any;
  shop:any;
  shopId:any;
  constructor(private providerService:ProvidersService,private router:Router){}

  ngOnInit(){
    let shopUserName = localStorage.getItem("shopUsername");
    this.providerService.getShopByUsername(shopUserName)
    .subscribe((data)=>
    {
      this.shop = data;
      this.shopId = this.shop.shopId;
    });

    this.providerService.getMyOrderfood()
    .pipe(
      map((food: any) => {
        return food.filter((x: any) => x.shopId === this.shopId);
      })
    )
    .subscribe((x) => {
      this.myOrderfood = x;
    });
    
  }
  orderDetails(id:any,oid:any,uid:any){
    this.router.navigate(['provider', 'shop', 'orderdetails', id, oid, uid]);
  }
}
