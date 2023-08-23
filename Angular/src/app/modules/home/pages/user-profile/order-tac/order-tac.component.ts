import { Component } from '@angular/core';
import { ProvidersService } from 'src/app/modules/foods-providers/services/providers.service';
import { HomeService } from '../../../services/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderFoods } from 'src/app/modules/share/models/order-foods';

@Component({
  selector: 'app-order-tac',
  templateUrl: './order-tac.component.html',
  styleUrls: ['./order-tac.component.css']
})
export class OrderTacComponent {
  orderId: any;
  userId: any;
  shopId: any;
  foodId: any;
  foodName: any;
  foodQuantity: any;
  foodPrice: any;
  shopName: any;
  foodDescription: any;
  orderFoodStatus: any;
  discount: any;
  deliveryCharge: any;
  totalPrice: any;
  orderFoodId: any;
  orderStep: any;
  myorderfood: any;


  steps: string[] = [
    'Confirmed Order',
    'Processing Order',
    'Wait For Rider',
    'On The Way',
    'Delivered'
  ];
  // currentStep =this.orderStep;
  icons: string[] = ['pe-7s-cart', 'pe-7s-config', 'pe-7s-users', 'pe-7s-bicycle', 'pe-7s-home'];

constructor(
    private providerService: ProvidersService,
    private homeService: HomeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    
    this.providerService.getOrderFoodByOrderFoodId(id).subscribe((data) => {
      this.myorderfood = data;
      this.orderId = this.myorderfood.orderId;
      this.userId = this.myorderfood.userId;
      this.shopId = this.myorderfood.shopId;
      this.foodId = this.myorderfood.foodId;
      this.foodName = this.myorderfood.foodName;
      this.foodQuantity = this.myorderfood.foodQuantity;
      this.foodPrice = this.myorderfood.foodPrice;
      this.shopName = this.myorderfood.shopName;
      this.foodDescription = this.myorderfood.foodDescription;
      this.orderFoodStatus = this.myorderfood.orderFoodStatus;
      this.discount = this.myorderfood.discount;
      this.deliveryCharge = this.myorderfood.deliveryCharge;
      this.totalPrice = this.myorderfood.totalPrice;
      this.orderFoodId = this.myorderfood.orderFoodId;
      this.orderStep = this.myorderfood.orderStep;
    });
  }

  updateStep() {
    let myorder = new OrderFoods(
      this.orderId,
      this.userId,
      this.shopId,
      this.foodId,
      this.foodName,
      this.foodQuantity,
      this.foodPrice,
      this.shopName,
      this.foodDescription,
      this.orderFoodStatus,
      this.discount,
      this.deliveryCharge,
      this.totalPrice,
      this.orderFoodId,
      this.orderStep
    );

    this.homeService.UpdateMyOrderFoods(myorder).subscribe((data) => {
      console.log('success', data);
    });
  }

  getIcon(stepIndex: number): string {
    // If stepIndex is greater than or equal to the number of icons available,
    // loop back to the first icon to repeat the sequence.
    const iconIndex = stepIndex % this.icons.length;
    return this.icons[iconIndex];
  }
  isOptionDisabled(optionIndex: number): boolean {
    return this.orderStep >= optionIndex;
  }
}
