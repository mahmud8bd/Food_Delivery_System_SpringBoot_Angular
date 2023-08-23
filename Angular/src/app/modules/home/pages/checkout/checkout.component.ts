import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { CartService } from '../../services/cart.service';
import { Order } from 'src/app/modules/share/models/order';
import { NgToastService } from 'ng-angular-popup';
import { OrderFoods } from 'src/app/modules/share/models/order-foods';
import { PromoCodeService } from 'src/app/modules/admin/services/promo-code.service';
import { Transection } from 'src/app/modules/admin/model/transection';
import { TransectionService } from 'src/app/modules/admin/services/transection.service';
import { Balance } from 'src/app/modules/share/models/balance';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  // user area
  userId: any;
  userFullName: any;
  username: any;
  userEmail: any;
  userPassword: any;
  userAddress: any;
  user: any;

  orderId: string ='OR' + new Date().getDate().toString() + new Date().getTime().toString();
  orderDate: any = new Date();
  orderStatus: any = 'Panding';
  // userId: any;
  userName: any;
  userphone: any;
  // userEmail: any;
  // userAddress: any;
  shopId: any;
  shopName: any;
  shopAddress: any;
  paymentMethod: any;
  payNumber: any;
  transectionNumber: any;
  discount: any;
  totalPrice: any;

  // order area
  orders: any;
  promoCode: any;
  priceMinusPromoCode: any;


  // Cart area
  cartItems: any;
  cartItemCount: number = 0;
  cartTotal: number = 0;
  cartTotalall: number = 0;

  // my order area
  myorderfood: any;
  orderFoodStatus: any ="Panding";
  orderFoodId: number =new Date().getTime();
  orderStep:string = "0";

  promoCodesInput: string='';
  constructor(
    private router: Router,
    private homeservice: HomeService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private toast: NgToastService,
    private promoCodeService: PromoCodeService,
    private transectionService: TransectionService
  ) {
    this.paymentMethod = "Cash";
    this.username = localStorage.getItem('username');
    if (this.username === null) {
      router.navigate(['userlogin']);
    }
  }
  ngOnInit() {
    let username = localStorage.getItem('username');
    this.homeservice.getUserByUsername(username).subscribe((data) => {
      this.user = data;
      this.userId = this.user.userId;
      this.userFullName = this.user.userFullName;
      this.username = this.user.username;
      this.userEmail = this.user.userEmail;
      this.userPassword = this.user.userPassword;
      this.userAddress = this.user.userAddress;
    });

    this.cartItems = this.cartService.getCartItems();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.calcCartTotal();
  }


  calcCartTotal() {
    this.cartTotal = 0;
    if (this.cartItems) {
      this.cartItems.forEach((item: any) => {
        this.cartTotal +=
          (item.foodPrice - (item.foodPrice * item.foodDiscount) / 100) *
          item.quantity;
      });
    }
    this.cartTotalall = this.cartTotal + 2 + (this.cartTotal * 5) / 100;
  }
  applyPromoCodes(): void {
    const enteredCodes = this.promoCodesInput.split(',').map((code) => code.trim());

    let finalPrice = this.cartTotalall;
    for (const code of enteredCodes) {
      if (this.promoCodeService.validatePromoCode(code)) {
        finalPrice = this.promoCodeService.applyDiscount(finalPrice, code);
      } else {
        // Handle invalid promo code here (e.g., show an error message)
      }
    }

    this.cartTotalall = finalPrice;
  }
  addOrder() {
    if (this.cartItems.length > 0) {
      this.orders = new Order(
        this.orderId,
        this.orderDate,
        this.orderStatus,
        this.userId,
        this.username,
        this.userphone,
        this.userEmail,
        this.userAddress,
        this.shopId,
        this.shopName,
        this.shopAddress,
        this.paymentMethod,
        this.payNumber,
        this.transectionNumber,
        this.discount,
        this.cartTotal
      );
      this.homeservice.addOrder(this.orders).subscribe(
        (data) => {
          console.log('success', data);
          this.toast.success({
            detail: 'SUCCESS',
            summary: 'Order Success',
            duration: 5000,
            position: 'topRight',
          });
        },
        (error) => {
          console.error('Error adding order', error);
        }
      );
      for (const fooditem of this.cartItems) {
        this.myorderfood = new OrderFoods(
          this.orderId,
          this.userId,
          fooditem.shopId,
          fooditem.foodId,
          fooditem.foodName,
          fooditem.quantity,
          fooditem.foodDiscountPrice,
          fooditem.shopName,
          fooditem.foodDescription,
          this.orderFoodStatus,
          this.discount,
          2,
          fooditem.foodDiscountPrice * fooditem.quantity,
          this.orderFoodId ++,
          this.orderStep
        );

        this.homeservice.addMyOrderFoods(this.myorderfood).subscribe((data) => {
          console.log('success', data);
        });

        let balance = new Balance(null, fooditem.shopId, fooditem.shopName, ((fooditem.foodDiscountPrice * fooditem.quantity)-(fooditem.foodDiscountPrice * fooditem.quantity)*15/100), null, null, null);
        this.transectionService.updateBalance(balance)
        .subscribe((data)=>{
          console.log("success" , data);
        });
      }
      
     if(this.paymentMethod==="Bkash" || this.paymentMethod==="Nagad"){
      let transection = new Transection(null,this.orderDate,  this.orderId, this.userId, this.username, this.userFullName,this.paymentMethod, this.payNumber, this.transectionNumber, this.cartTotal, this.cartTotal);

      this.transectionService.saveTransection(transection)
      .subscribe((data)=> {
        console.log("success", data);
      });
     }


      this.cartService.clearCart();
      this.router.navigate(['invoice', this.orderId]);
    } else {
      alert('please add new Card');
    }
  }

  
}
