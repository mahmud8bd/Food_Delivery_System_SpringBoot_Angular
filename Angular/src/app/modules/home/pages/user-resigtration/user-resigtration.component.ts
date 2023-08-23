import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';
import { Users } from '../../models/users';

@Component({
  selector: 'app-user-resigtration',
  templateUrl: './user-resigtration.component.html',
  styleUrls: ['./user-resigtration.component.css']
})
export class UserResigtrationComponent {
  
  userId: any;
  userFullName: any;
  username: any;
  userEmail: any;
  userPassword: any;
  userAddress: any;
  user:any;

    constructor(private homeService:HomeService, private router:Router){
      this.username = localStorage.getItem("username");
      if(this.username != null){
        router.navigate(['userprofile']);
      }
    }


    addUsers(){
      this.user = new Users(this.userId,this.userFullName,this.username,this.userEmail,this.userPassword,this.userAddress);
      this.homeService.addUsers(this.user)
      .subscribe(
        data => console.log("success", data),
        error => console.error("error", error)
      );
    }
}
