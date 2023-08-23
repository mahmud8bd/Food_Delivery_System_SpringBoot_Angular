import {
  faStar,
  faSearchLocation,
  faStreetView,
  faMapMarker,
  faMapLocation,
  faEyeSlash,
  faEye,
  faDashboard,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';
import { filter, tap, map, Observable, pipe } from 'rxjs';
import { ImageUploadService } from 'src/app/modules/share/service/image-upload.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css'],
})
export class FoodsComponent {
  // Dashboard icon variable Start
  faStar = faStar;
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  faDashboard = faDashboard;
  faHome = faHome;
  faSearchLocation = faSearchLocation;
  faMapLocation = faMapLocation;
  faMapMarker = faMapMarker;
  faStreetView = faStreetView;
  // Dashboard icon variable End

  lading: boolean = true;
  foods: any;

  imageInfos: any;
  foodImageUrls: { [foodId: string]: string } = {};

  constructor(
    private imageUploadService: ImageUploadService,
    private homeService: HomeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.homeService
      .getFoods()
      .pipe(
        tap(() => {
          this.lading = false;
        }),
        map((food: any) => {
          return food.filter((x: any) => x.action === true);
        })
      )
      .subscribe((x) => {
        this.foods = x;
      });

    this.imageUploadService.getFiles().subscribe(
      (imageInfos: any) => {
        this.imageInfos = imageInfos;
        this.loadFoodImages();
      },
      (error: any) => {
        console.error('Error fetching image infos:', error);
      }
    );
  }

  loadFoodImages() {
    const foodIds = this.imageInfos.map((food: any) => food.name);  //get database response variable name as id
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

  detailsFood(id: any) {
    this.router.navigate(['details', id]);
  }
}
