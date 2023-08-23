import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shop } from '../models/shop';
import { Observable } from 'rxjs';
import { Foods } from '../../share/models/foods';
import { Users } from '../../home/models/users';
import { OrderFoods } from '../../share/models/order-foods';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  private url = 'http://localhost:8080';
  constructor(private http:HttpClient) { }


  addShop(shop:Shop):Observable<Shop>{
    this.url = 'http://localhost:8080/addshop';
    return this.http.post(this.url, shop);
  }
  loginCheckShop(shop:Shop): Observable<Shop> {
    this.url = 'http://localhost:8080/';
    return this.http.post<Shop>(`${this.url}shoplogin`, shop);
  }
  getShopByUsername(shopusername: any): Observable<Shop> {
    this.url = 'http://localhost:8080/';
    return this.http.get<Shop>(`${this.url}shops/${shopusername}`);
  }



  //foods area
  addfood(foods:Foods):Observable<Foods>{
    this.url = 'http://localhost:8080/addfood';
    return this.http.post(this.url, foods);
  }
  updatefood(foods:Foods):Observable<Foods>{
    this.url = 'http://localhost:8080/updatefood';
    return this.http.post(this.url, foods);
  }
  

  getMyOrderfood(){
    this.url = 'http://localhost:8080/getallorfood';
    return this.http.get(this.url);
  }

  getUserById(id:any):Observable<Users>{
    this.url = 'http://localhost:8080/';
    return this.http.get<Users>(`${this.url}usersdata/${id}`);
  }


  getOrderFoodByOrderFoodId(id:any):Observable<OrderFoods>{
    this.url = 'http://localhost:8080/';
    return this.http.get<OrderFoods>(`${this.url}ordersfoodbyid/${id}`);
  }
}
