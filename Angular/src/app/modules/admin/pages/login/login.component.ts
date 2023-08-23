import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { Admin } from '../../model/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  

  adminId: any;
  username: any;
  email: any;
  password: any;
  phone: any;
  address: any;
  constructor(private router: Router, private fService: AdminService) {}
  ngOnInit() {}
  
  login() {
    let admin: Admin = new Admin(this.adminId,this.username, this.email, this.password, this.phone, this.address);
    
    this.fService.loginCheck(admin).subscribe((data) => {
      console.log(data);
      let d: any = data;
      console.log(d.status);
      if (d.status == 'success') {
        this.router.navigate(['admin/dash']);
      } else {
        alert('username or Password is wrong');
      }
    });
  }
}
