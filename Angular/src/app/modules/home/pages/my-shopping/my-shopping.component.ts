import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-shopping',
  templateUrl: './my-shopping.component.html',
  styleUrls: ['./my-shopping.component.css'],
})
export class MyShoppingComponent {
  myorder: any;
  
  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit() {
    let username = localStorage.getItem('username');
    this.homeService
      .getOrderByUsername(username)
      .subscribe((data) => (this.myorder = data));
  }
}
