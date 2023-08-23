import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foods } from '../../share/models/foods';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private url = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.url = 'http://localhost:8080/food';
  }

  addFood(foods: Foods) {
    this.url = 'http://localhost:8080/addfood';
    return this.http.post(this.url, foods);
  }
  deleteFood(foods: Foods) {
    this.url = 'http://localhost:8080/deletefood';
    return this.http.post(this.url, foods);
  }
  updateFood(foods: Foods) {
    this.url = 'http://localhost:8080/updatefood';
    return this.http.post(this.url, foods);
  }

  getFoods(): Observable<any> {
    return this.http.get('http://localhost:8080/food');
  }
  getFoodsById(id: number): Observable<Foods> {
    this.url = 'http://localhost:8080/';
    return this.http.get<Foods>(`${this.url}foods/${id}`);
  }


  adAdmin(admin: Admin) {
    this.url = 'http://localhost:8080/addadmin';
    return this.http.post(this.url, admin);
  }

  loginCheck(admin: Admin): Observable<Admin> {
    this.url = 'http://localhost:8080/';
    return this.http.post<Admin>(`${this.url}adminlogin`, admin);
  }






  
  confirmFood(foods: Foods) {
    this.url = 'http://localhost:8080/confirmfood';
    return this.http.post(this.url, foods);
  }



   getProviders(){
    this.url = 'http://localhost:8080/allproviders';
    return this.http.get(this.url);
   }

   getUsers(){
    this.url = 'http://localhost:8080/allusers';
    return this.http.get(this.url);
   }



   getOrderFood(){
    this.url = 'http://localhost:8080/allorders';
    return this.http.get(this.url);
   }
}
