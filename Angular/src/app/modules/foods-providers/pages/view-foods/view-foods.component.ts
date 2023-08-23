import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/modules/admin/services/admin.service';
import { Foods } from 'src/app/modules/share/models/foods';
import { filter, tap, map } from 'rxjs';
import { ProvidersService } from '../../services/providers.service';

@Component({
  selector: 'app-view-foods',
  templateUrl: './view-foods.component.html',
  styleUrls: ['./view-foods.component.css'],
})
export class ViewFoodsComponent {
  // shopId: any;
  shopFullName: any;
  shopUserName: any;
  shopType: any;
  shopEmail: any;
  shopPhone: any;
  // shopAddress: any;
  shopPassword: any;
  shop:any;


  foodId: any;
  foodName: any;
  foodType: any;
  foodDescription: any;
  foodPrice: any;
  foodDiscount: any;
  foodDiscountPrice: any;
  shopId: any;
  shopName: any;
  shopAddress: any;
  action: any;
  quantity: any;
  confirm: any;
  food: any;
  foods: any;
  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute,
    private providerService: ProvidersService
  ) {}

  ngOnInit() {
    this.shopUserName = localStorage.getItem("shopUsername");
    this.providerService.getShopByUsername(this.shopUserName)
    .subscribe((data)=>
    {
      this.shop = data;
      this.shopId = this.shop.shopId;
    });
    

    this.adminService
      .getFoods()
      .pipe(
        map((food: any) => {
          return food.filter((x: any) => x.shopId === this.shopId);
        })
      )
      .subscribe((x) => {
        this.foods = x;
      });
  }

  
  deleteFood(foodId: any) {
    this.food = new Foods(
      foodId,
      this.foodName,
      this.foodType,
      this.foodDescription,
      this.foodPrice,
      this.foodDiscount,
      this.foodDiscountPrice,
      this.shopId,
      this.shopName,
      this.shopAddress,
      this.action,
      this.quantity
    );
    this.adminService
      .deleteFood(this.food)
      .subscribe((data) => console.log('success', data));
    this.router.navigate(['viewfoods']);
  }

  updatepage(id: any) {
    this.router.navigate(['provider', 'shop', 'updatefood', id]);
  }
  
}
