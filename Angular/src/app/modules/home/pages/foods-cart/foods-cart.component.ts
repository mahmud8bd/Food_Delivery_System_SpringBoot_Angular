import { Component } from '@angular/core';
import { Foods } from 'src/app/modules/share/models/foods';
import { CartService } from '../../services/cart.service';
import { NgToastService } from 'ng-angular-popup';
import { ImageUploadService } from 'src/app/modules/share/service/image-upload.service';

@Component({
  selector: 'app-foods-cart',
  templateUrl: './foods-cart.component.html',
  styleUrls: ['./foods-cart.component.css'],
})
export class FoodsCartComponent {
  // cartItems!: Foods[];
  cartItems: any;
  cartItemCount: number = 0;
  cartTotal: number = 0;
  cartTotalall: number = 0;

  imageInfos: any;
  foodImageUrls: { [foodId: string]: string } = {};

  constructor(
    private cartService: CartService,
    private toast: NgToastService,
    private imageUploadService: ImageUploadService
  ) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.calcCartTotal();

    this.imageUploadService.getFiles().subscribe(
      (imageInfos: any) => {
        this.imageInfos = imageInfos;
        this.loadFoodImages();
      },
      (error: any) => {
        console.error('Error fetching image infos:', error);
      }
    );
  }

  removeFromCart(foods: Foods) {
    this.cartService.removeItem(foods);
    this.cartItems = this.cartService.getCartItems();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.calcCartTotal();
    this.toast.error({
      detail: 'Remove',
      summary: 'Remove Item Successfully',
      duration: 5000,
      position: 'topRight',
    });
  }

  updateQuantity(foods: Foods) {
    this.cartService.updateQuantity(foods, foods.quantity);
    this.cartItemCount = this.cartService.getCartItemCount();
    this.calcCartTotal();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  calcCartTotal() {
    this.cartTotal = 0;
    if (this.cartItems) {
      this.cartItems.forEach((item: any) => {
        this.cartTotal +=
          (item.foodPrice - (item.foodPrice * item.foodDiscount) / 100) *
          item.quantity;
        console.log(item.foodPrice);
      });
    }
    this.cartTotalall = this.cartTotal + 2 + (this.cartTotal * 5) / 100;
  }

  loadFoodImages() {
    const foodIds = this.imageInfos.map((food: any) => food.name); //get database response variable name as id
    for (const foodId of foodIds) {
      this.imageUploadService.getImageByFoodId(foodId).subscribe(
        (imageUrl: string) => {
          this.foodImageUrls[foodId] = imageUrl;
          console.log(imageUrl);
        },
        (error: any) => {
          console.error(`Error fetching image for foodId ${foodId}:`, error);
        }
      );
    }
  }
}
