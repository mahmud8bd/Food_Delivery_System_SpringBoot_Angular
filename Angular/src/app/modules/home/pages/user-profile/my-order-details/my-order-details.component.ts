import { Component } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { ProvidersService } from 'src/app/modules/foods-providers/services/providers.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-my-order-details',
  templateUrl: './my-order-details.component.html',
  styleUrls: ['./my-order-details.component.css']
})
export class MyOrderDetailsComponent {
  userId: any;
  userFullName: any;
  username: any;
  userEmail: any;
  userPassword: any;
  userAddress: any;
  userArray: any;



  orderId: any;
  orderDate: any;
  orderStatus: any;
  // userId: any;
  userName: any;
  userphone: any;
  // userEmail: any;
  // userAddress: any;
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
    orderStep:any;
    myorderfood:any;
    orid:any;
  constructor(
    private hservice: HomeService,
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private providerService:ProvidersService
  ) { }


  ngOnInit() {
    this.orid = this.route.snapshot.params['id'];
    let username = localStorage.getItem("username");
    console.log(username);
    this.hservice.getUserByUsername(username).subscribe((data) => {
      this.userArray = data;
      this.userId = this.userArray.userId;
      this.userFullName = this.userArray.userFullName;
      this.username = this.userArray.username;
      this.userEmail = this.userArray.userEmail;
      this.userPassword = this.userArray.userPassword;
      this.userAddress = this.userArray.userAddress;

    });


    
    this.providerService.getMyOrderfood()
    .pipe(
      map((food: any) => {
        return food.filter((x: any) => x.orderId === this.orid);
      })
    )
    .subscribe((x) => {
      this.myorderfood = x;
    });



    this.hservice.getOrderByOrderId(this.orid).subscribe((data) => {
      this.order = data;
      this.orderId = this.order.orderId;
      this.orderDate = this.order.orderDate;
      this.orderStatus = this.order.orderStatus;
      this.userId = this.order.userId;
      this.userName = this.order.userName;
      this.userphone = this.order.userphone;
      this.userEmail=this.order.userEmail;
      this.userAddress=this.order.userAddress;
      this.shopId=this.order.shopId;
      this.shopName=this.order.shopName;
      this.paymentMethod=this.order.paymentMethod;
      this.payNumber=this.order.payNumber;
      this.transectionNumber=this.order.transectionNumber;
      this.discount=this.order.discount;
      this.totalPrice=this.order.totalPrice;
    });
  }

  orderTacking(id:any){
    this.router.navigate(['userprofile', 'ortac', id]);
  }
}
