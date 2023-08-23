import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';
import { Users } from '../../models/users';

import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  userId: any;
  userFullName: any;
  username: any;
  userEmail: any;
  userPassword: any;
  userAddress: any;

  constructor(
    private homeService: HomeService,
    private router: Router,
    private toast: NgToastService
  ) {
    this.username = localStorage.getItem('username');
    if (this.username != null) {
      router.navigate(['userprofile']);
    }
  }

  userlogin() {
    let user: Users = new Users(
      this.userId,
      this.userFullName,
      this.username,
      this.userEmail,
      this.userPassword,
      this.userAddress
    );

    this.homeService.loginCheckUser(user).subscribe((data) => {
      console.log(data);
      let d: any = data;
      console.log(d.status);
      if (d.status == 'success') {
        localStorage.setItem('username', this.username);
        this.router.navigate(['/']);
      } else {
        this.toast.error({
          detail: 'Warning',
          summary: 'user name or password is wrong!',
          duration: 5000,
          position: 'topRight',
        });
      }
    });
  }
}
