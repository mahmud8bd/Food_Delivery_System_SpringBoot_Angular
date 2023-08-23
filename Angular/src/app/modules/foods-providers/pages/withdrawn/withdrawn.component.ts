import { Component } from '@angular/core';
import { TransectionService } from 'src/app/modules/admin/services/transection.service';
import { ProvidersService } from '../../services/providers.service';
import { Withdrow } from 'src/app/modules/share/models/withdrow';
import { Balance } from 'src/app/modules/share/models/balance';
import { map } from 'rxjs';

@Component({
  selector: 'app-withdrawn',
  templateUrl: './withdrawn.component.html',
  styleUrls: ['./withdrawn.component.css']
})
export class WithdrawnComponent {
  shop: any;
  shopId: any; //from database
  shopName: any; //from database
  shopAddress: any; //from database


  balance: any;
  balanceId: any;
  userId: any;
  userName: any;
  amount: any;
  createDate: any;
  updateDate: any;
  status: any;

  requestAmount: any;
  withdrawn:any;
  constructor(private providerService: ProvidersService, private transectionService: TransectionService) { }

  ngOnInit() {
    let shopUserName = localStorage.getItem("shopUsername");
    this.providerService.getShopByUsername(shopUserName)
      .subscribe((data) => {
        this.shop = data;
        this.shopId = this.shop.shopId;
        this.shopName = this.shop.shopFullName;
        // this.shopUserName = this.shop.shopUserName;
        // this.shopType = this.shop.shopType;
        // this.shopEmail = this.shop.shopEmail;
        // this.shopPhone = this.shop.shopPhone;
        this.shopAddress = this.shop.shopAddress;
        // this.shopPassword = this.shop.shopPassword;
        this.loadbalance();
      });
      this.loadedTransection();
  }

  loadbalance() {
    this.transectionService.getBalanceById(this.shopId)
      .subscribe((data) => {
        this.balance = data;
        this.balanceId = this.balance.balanceId;
        this.userId = this.balance.userId;
        this.userName = this.balance.userName;
        this.amount = this.balance.amount;
        this.createDate = this.balance.createDate;
        this.updateDate = this.balance.updateDate;
        this.status = this.balance.status;
      });
  }

  balanceWithdraw() {
    let withdraw = new Withdrow(null, this.userId, this.userName, this.requestAmount, null, null, null,);
    this.transectionService.addWithdraw(withdraw)
      .subscribe((data) => {
        console.log("success");
        this.updateBalance();
      });
  }

  updateBalance() {
    let balance = new Balance(null, this.userId, this.userName, this.requestAmount, null, null, null);
    this.transectionService.updateBalanceForWithdraw(balance)
      .subscribe((data) => {
        console.log("success", data);
        this.loadedTransection();
      });
  }

  loadedTransection(){
    let shopUserName = localStorage.getItem("shopUsername");
    this.transectionService.getWithdraw()
    .pipe(
      map((x: any) => {
        return x.filter((x: any) => x.userName === shopUserName);
      })
    )
    .subscribe((data)=>{
      this.withdrawn = data;
    });
  }

}
