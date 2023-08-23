import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Foods } from '../../share/models/foods';
import { Users } from '../models/users';
import { Order } from '../../share/models/order';
import { OrderFoods } from '../../share/models/order-foods';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private initializeAuthenticationStatus(): void {
    const username = localStorage.getItem('username');
    const isAuthenticated = username !== null;
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  updateAuthenticationStatus(isAuthenticated: boolean): void {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }
  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) {
    this.initializeAuthenticationStatus();
  }

  getFoods(): Observable<any> {
    return this.http.get('http://localhost:8080/food');
  }

  getFoodsById(id: number): Observable<Foods> {
    this.url = 'http://localhost:8080/';
    return this.http.get<Foods>(`${this.url}foods/${id}`);
  }
  // users area
  addUsers(users: Users): Observable<Users> {
    this.url = 'http://localhost:8080/addnewusers';
    return this.http.post(this.url, users);
  }
  loginCheckUser(users: Users): Observable<Users> {
    this.url = 'http://localhost:8080/';
    return this.http.post<Users>(`${this.url}userlogin`, users);
  }
  getUserByUsername(username: any): Observable<Users> {
    this.url = 'http://localhost:8080/';
    return this.http.get<Users>(`${this.url}users/${username}`);
  }

  // order area
  addOrder(order: Order) {
    this.url = 'http://localhost:8080/addorder';
    return this.http.post(this.url, order);
  }
  getOrderByUsername(username: any): Observable<Order> {
    this.url = 'http://localhost:8080/';
    return this.http.get<Order>(`${this.url}order/${username}`);
  }
  getOrderByOrderId(orderId: any): Observable<Order> {
    this.url = 'http://localhost:8080/';
    return this.http.get<Order>(`${this.url}orders/${orderId}`);
  }

  //my order
  addMyOrderFoods(orderfood: OrderFoods) {
    this.url = 'http://localhost:8080/myorderfood';
    return this.http.post(this.url, orderfood);
  }

  UpdateMyOrderFoods(orderfood: OrderFoods) {
    this.url = 'http://localhost:8080/updatemyorderfood';
    return this.http.post(this.url, orderfood);
  }
  getMyOrderFoodsById(id: number): Observable<OrderFoods> {
    this.url = 'http://localhost:8080/';
    return this.http.get<OrderFoods>(`${this.url}orderfoods/${id}`);
  }
}
