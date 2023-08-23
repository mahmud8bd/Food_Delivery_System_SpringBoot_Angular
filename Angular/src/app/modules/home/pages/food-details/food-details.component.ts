import {
  faStar,
  faHeart,
  faSearchLocation,
  faStreetView,
  faMapMarker,
  faMapLocation,
  faEyeSlash,
  faEye,
  faDashboard,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Foods } from 'src/app/modules/share/models/foods';
import { NgToastService } from 'ng-angular-popup';
import { ImageUploadService } from 'src/app/modules/share/service/image-upload.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css'],
})
export class FoodDetailsComponent {
  faStar = faStar;
  faHeart = faHeart;

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
  foods: any;
  cartItemCount: number = 0;

  imageUrl:any;
  constructor(
    private homeservice: HomeService,
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private toast: NgToastService,
    private imageUploadService: ImageUploadService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.homeservice.getFoodsById(id).subscribe((data) => {
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

    this.imageUploadService.getImageByFoodId(id)
    .subscribe((data)=>{
      this.imageUrl = data;
    });
    
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(foods: Foods) {
    this.cartService.addToCart(foods);
    this.cartItemCount = this.cartService.getCartItemCount();

    // this.router.navigate(['cart']);
  }
}
