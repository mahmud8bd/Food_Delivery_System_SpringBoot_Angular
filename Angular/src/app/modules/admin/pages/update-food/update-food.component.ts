import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Foods } from 'src/app/modules/share/models/foods';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css'],
})
export class UpdateFoodComponent {
  // id: any;
  // title: any;
  // description: any;
  // price: any;
  // discount: any;
  // type: any;
  // vendor: any;
  // location: any;
  // foods: any;
  // constructor(
  //   private foodservice: AdminService,
  //   private router: Router,
  //   private route: ActivatedRoute
  // ) {}

  // ngOnInit() {
  //   let id = this.route.snapshot.params['id'];
  //   this.foodservice.grtFoodsById(id).subscribe((data) => {
  //     this.foods = data;
  //     this.id = this.foods.id;
  //     this.title = this.foods.title;
  //     this.description = this.foods.description;
  //     this.price = this.foods.price;
  //     this.discount = this.foods.discount;
  //     this.type = this.foods.type;
  //     this.vendor = this.foods.vendor;
  //     this.location = this.foods.location;
  //   });
  // }
  // updateFood() {
  //   this.foods = new Foods(
  //     this.id,
  //     this.title,
  //     this.description,
  //     this.price,
  //     this.discount,
  //     this.type,
  //     this.vendor,
  //     this.location
  //   );
  //   this.foodservice
  //     .updateFood(this.foods)
  //     .subscribe((data) => console.log('success', data));
  //   this.router.navigate(['adminviewfood']);
  // }
}
