import { Component } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { ProvidersService } from 'src/app/modules/foods-providers/services/providers.service';
import { map } from 'rxjs';
declare var window: any;
@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent {
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
  myorderfood:any;


  formModal: any;
  orderIdForCancellation: string | null = null;
  constructor(
    private hservice: HomeService,
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private providerService:ProvidersService
  ) { }


  ngOnInit() {
    let username = localStorage.getItem("username");
    this.hservice.getUserByUsername(username).subscribe((data) => {
      this.userArray = data;
      this.userId = this.userArray.userId;
      this.userFullName = this.userArray.userFullName;
      this.username = this.userArray.username;
      this.userEmail = this.userArray.userEmail;
      this.userPassword = this.userArray.userPassword;
      this.userAddress = this.userArray.userAddress;

    });

    this.hservice.getOrderByUsername(username)
    .subscribe((x) => {
      this.myorderfood = x;
    });

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
  }

  orderDetails(id:any){
    this.router.navigate(['userprofile', 'myorderdetails', id]);
  }

  downloadInvoice(value:string){
    this.router.navigate(['invoice', value]);
  }



  openFormModal(orderId:string) {
    this.orderIdForCancellation = orderId; // Store the order ID
    this.formModal.show();
  }
  saveSomeThing() {
    if (this.orderIdForCancellation !== null) {
      // Implement your order cancellation logic using the stored order ID
      // For example, call a service to cancel the order
      // Once the order is canceled, you can update the UI and hide the modal
      console.log('Cancelling order with ID:', this.orderIdForCancellation);
      this.orderIdForCancellation = null; // Reset the order ID
    }
    this.formModal.hide();
  }
}
