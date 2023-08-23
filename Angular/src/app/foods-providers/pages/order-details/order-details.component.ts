import { Component } from '@angular/core';
import { ProvidersService } from '../../services/providers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/modules/home/services/home.service';
import { OrderFoods } from 'src/app/modules/share/models/order-foods';
import { EmailSenderService } from 'src/app/modules/share/service/email-sender.service';
import { Emai } from 'src/app/modules/share/models/emai';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent {
  orderId: any;
  orderDate: any;
  orderStatus: any;
  userId: any;
  userName: any;
  userphone: any;
  userEmail: any;
  userAddress: any;
  // shopId: any;
  // shopName: any;
  // shopAddress: any;
  paymentMethod: any;
  payNumber: any;
  transectionNumber: any;
  discount: any;
  totalPrice: any;
  order: any;
  orderFood: any;

  userArray: any;
  // userId: any;
  userFullName: any;
  username: any;
  // userEmail: any;
  userPassword: any;
  // userAddress: any;

  // orderId: any;
  // userId: any;
  shopId: any;
  foodId: any;
  foodName: any;
  foodQuantity: any;
  foodPrice: any;
  shopName: any;
  foodDescription: any;
  orderFoodStatus: any;
  // discount: any;
  deliveryCharge: any;
  // totalPrice: any;
  orderFoodId: any;
  orderStep: any;
  myorderfood: any;

  constructor(
    private providerService: ProvidersService,
    private homeService: HomeService,
    private router: Router,
    private route: ActivatedRoute,
    private emailService: EmailSenderService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    let oid = this.route.snapshot.params['oid'];
    let uid = this.route.snapshot.params['uid'];
    this.homeService.getOrderByOrderId(oid).subscribe((data) => {
      this.order = data;
      this.orderId = this.order.orderId;
      this.orderDate = this.order.orderDate;
      this.orderStatus = this.order.orderStatus;
      this.userId = this.order.userId;
      this.userName = this.order.userName;
      this.userphone = this.order.userphone;
      this.userEmail = this.order.userEmail;
      this.userAddress = this.order.userAddress;
      // this.shopId=this.order.shopId;
      // this.shopName=this.order.shopName;
      // this.shopAddress=this.order.shopAddress;
      this.paymentMethod = this.order.paymentMethod;
      this.payNumber = this.order.payNumber;
      this.transectionNumber = this.order.transectionNumber;
      this.discount = this.order.discount;
      this.totalPrice = this.order.totalPrice;
    });

    this.providerService.getUserById(uid).subscribe((data) => {
      this.userArray = data;
      this.userId = this.userArray.userId;
      this.userFullName = this.userArray.userFullName;
      this.username = this.userArray.username;
      this.userEmail = this.userArray.userEmail;
      this.userPassword = this.userArray.userPassword;
      this.userAddress = this.userArray.userAddress;
    });

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
      if ((this.orderStep = '1')) {
        const smsBody = `
        Hello ${this.userFullName} 
        Order Id: #${this.orderId}
        Total Price: $${this.totalPrice}
        Your Order Is confirmed.... Please wait for delivery.`;

        this.emailService
          .sendEmail(new Emai(this.userEmail, 'Confirm Order', smsBody))
          .subscribe((data) => {
            console.log('success');
          });
      }
    });
  }
  isOptionDisabled(optionIndex: number): boolean {
    return this.orderStep >= optionIndex;
  }
}
