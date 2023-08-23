import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userId: any;
  userFullName: any;
  username: any;
  userEmail: any;
  userPassword: any;
  userAddress: any;
  userArray: any;

  constructor(
    private hservice: HomeService,
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }


  ngOnInit() {
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
  }
}
