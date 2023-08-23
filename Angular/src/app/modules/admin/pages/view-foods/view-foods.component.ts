import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Foods } from 'src/app/modules/share/models/foods';
import { ImageUploadService } from 'src/app/modules/share/service/image-upload.service';
import { EmailSenderService } from 'src/app/modules/share/service/email-sender.service';
import { Emai } from 'src/app/modules/share/models/emai';

@Component({
  selector: 'app-view-foods',
  templateUrl: './view-foods.component.html',
  styleUrls: ['./view-foods.component.css'],
})
export class ViewFoodsComponent {
  foodId: any;
  foodName: any;
  foodType: any;
  foodDescription: any;
  foodPrice: any;
  foodDiscount: any;
  foodDiscountPrice: any;
  shopId: any;
  shopName: any;
  shopAddress: any;
  action: any;
  quantity: any;
  confirm: any;
  food: any;
  foods: any;

  imageInfos: any;
  foodImageUrls: { [foodId: string]: string } = {};

  constructor(
    private imageUploadService: ImageUploadService,
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute,
    private emailService: EmailSenderService
  ) {}

  ngOnInit() {
    // this.adminService.getFoods().subscribe((x) => {
    //   this.foods = x;
    // });

    this.imageUploadService.getFiles().subscribe(
      (imageInfos: any) => {
        this.imageInfos = imageInfos;
        this.loadFoodImages();
      },
      (error: any) => {
        console.error('Error fetching image infos:', error);
      }
    );
    this.loaddata();
  }

  loaddata() {
    this.adminService.getFoods().subscribe((x) => {
      this.foods = x;
    });
  }

  deleteFood(foodId: any) {
    this.food = new Foods(
      foodId,
      this.foodName,
      this.foodType,
      this.foodDescription,
      this.foodPrice,
      this.foodDiscount,
      this.foodDiscountPrice,
      this.shopId,
      this.shopName,
      this.shopAddress,
      this.action,
      this.quantity
    );
    this.adminService
      .deleteFood(this.food)
      .subscribe((data) => console.log('success', data));
    this.router.navigate(['adminviewfood']);
  }

  updatepage(id: any) {
    this.router.navigate(['admin', 'dash', 'updatefood', id]);
  }
  jumpadd() {
    this.router.navigate(['admin', 'dash', 'addfood']);
  }

  confirmFood(foodId: any, value: boolean) {
    if (value) {
      this.confirm = false;
    } else {
      this.confirm = true;
      const smsBody = `
        Hello ${this.shopName} 
        Food Name: #${this.foodName}
        Food Price: $${this.foodPrice}
        Your new food added successfully.`;

        this.emailService
          .sendEmail(new Emai('sazzad9zoom@gmail.com', 'Added New Food', smsBody))
          .subscribe((data) => {
            console.log('success');
          });
    }

    this.food = new Foods(
      foodId,
      this.foodName,
      this.foodType,
      this.foodDescription,
      this.foodPrice,
      this.foodDiscount,
      this.foodDiscountPrice,
      this.shopId,
      this.shopName,
      this.shopAddress,
      this.confirm,
      this.quantity
    );
    this.adminService
      .confirmFood(this.food)
      .subscribe((data) => {
        console.log('success', data)
      });
    this.router.navigate(['adminviewfood']);
    this.loaddata();
  }

  loadFoodImages() {
    const foodIds = this.imageInfos.map((food: any) => food.name); //get database response variable name as id
    for (const foodId of foodIds) {
      this.imageUploadService.getImageByFoodId(foodId).subscribe(
        (imageUrl: string) => {
          this.foodImageUrls[foodId] = imageUrl;
          console.log(imageUrl);
        },
        (error: any) => {
          console.error(`Error fetching image for foodId ${foodId}:`, error);
        }
      );
    }
  }
}
