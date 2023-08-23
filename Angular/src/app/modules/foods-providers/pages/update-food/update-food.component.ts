import { Component } from '@angular/core';
import { ProvidersService } from '../../services/providers.service';
import { Foods } from 'src/app/modules/share/models/foods';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/modules/home/services/home.service';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent {
  foodId: any; //auto
  foodName: any;
  foodType: any;
  foodDescription: any;
  foodPrice: any;
  foodDiscount: any;
  foodDiscountPrice: any;

  shopId: any; //from database
  shopName: any; //from database
  shopAddress: any; //from database
  action: any; //from database
  quantity: any;

  foods: any;
  shop: any;
  constructor(private providerService: ProvidersService,private homeService:HomeService, private router:Router, private route:ActivatedRoute) { }

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
      });

      let id = this.route.snapshot.params['id'];
    this.homeService.getFoodsById(id).subscribe((data) => {
      this.foods = data;
      this.foodId = this.foods.foodId;
      this.foodName = this.foods.foodName;
      this.foodType = this.foods.foodType;
      this.foodDescription = this.foods.foodDescription;
      this.foodPrice = this.foods.foodPrice;
      this.foodDiscount = this.foods.foodDiscount;
      this.foodDiscountPrice = this.foods.foodDiscountPrice;
      this.shopId = this.foods.shopId;
      this.shopName = this.foods.shopName;
      this.shopAddress = this.foods.shopAddress;
      this.action = this.foods.action;
      this.quantity = this.foods.quantity;
    });
  }

  updateFood() {
    this.foods = new Foods(this.foodId, this.foodName, this.foodType, this.foodDescription, this.foodPrice, this.foodDiscount, this.foodDiscountPrice, this.shopId, this.shopName, this.shopAddress, false, this.quantity);
    this.providerService.updatefood(this.foods)
      .subscribe((data) => console.log("success", data));
      this.router.navigate(['provider','shop','viewfoods']);
  }

}
