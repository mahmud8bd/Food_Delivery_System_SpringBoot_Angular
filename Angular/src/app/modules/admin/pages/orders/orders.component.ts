import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  order:any;
  constructor(private adminService:AdminService) {
    
  }
  ngOnInit(){
    this.adminService.getOrderFood()
    .subscribe((data)=>{
      this.order = data;
    })
  }
}
