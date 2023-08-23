import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { Admin } from '../../model/admin';

@Component({
  selector: 'app-registration-admin',
  templateUrl: './registration-admin.component.html',
  styleUrls: ['./registration-admin.component.css']
})
export class RegistrationAdminComponent {
  
  adminId: any;
  username: any;
  email: any;
  password: any;
  phone: any;
  address: any;
  admin:any;
constructor(private router: Router, private fService:AdminService){}

saveAdmin(){
this.admin= new Admin(this.adminId,this.username, this.email, this.password, this.phone, this.address)
this.fService.adAdmin(this.admin)
.subscribe(data =>console.log("success", data));
this.router.navigate(['admin','login']);
}


}
