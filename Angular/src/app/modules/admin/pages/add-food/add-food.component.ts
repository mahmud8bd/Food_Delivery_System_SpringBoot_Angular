import { Component,ElementRef } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { Foods } from 'src/app/modules/share/models/foods';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent {
  // id:any;
  // title:any;
  // description:any;
  // price:any;
  // discount:any;
  // type:any;
  // vendor:any;
  // location:any;
  // foods:any;
  // constructor(private foodservice:AdminService, private router:Router, private elementRef:ElementRef){}
  
  // saveFood() {
  //   this.foods = new Foods(this.id, this.title, this.description, this.price, this.discount, this.type, this.vendor, this.location);
  //   this.foodservice.addFood(this.foods)
  //   .subscribe(data =>console.log("success", data));
  //   this.router.navigate(['adminviewfood']);
  // }
}
