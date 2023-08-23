import { Injectable } from '@angular/core';
import { Foods } from '../../share/models/foods';
import { NgToastService } from 'ng-angular-popup';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<Foods[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  private cartItems: Foods[] = [];

  constructor(private toast: NgToastService){
    const cartItems = localStorage.getItem('cartItems');
    if(cartItems){
      this.cartItems = JSON.parse(cartItems);
    }
  }

  addToCart(foods:Foods):void {
    const existingFood = this.cartItems.find(item => item.foodId === foods.foodId);
    if(existingFood){
      this.toast.error({detail:"Warning", summary:'Already added!', duration:5000, position:'topRight'});
    }else{
      foods.quantity = 1;
      this.cartItems.push(foods);
      this.toast.success({detail:"SUCCESS", summary:'AddToCart Success', duration:5000, position:'topRight'});
    }
    this.updateLocalStorage();
    this.cartItemsSubject.next(this.cartItems);
  }

  removeItem(foods:Foods):void{
    const index = this.cartItems.findIndex(item => item.foodId === foods.foodId);
    if(index !== -1){
      this.cartItems.splice(index, 1);
      this.updateLocalStorage();
    }
    this.cartItemsSubject.next(this.cartItems);
  }

  updateQuantity(foods:Foods, quantity:number): void{
    const existingFood = this.cartItems.find(item => item.foodId === foods.foodId);
    if(existingFood){
      existingFood.quantity = quantity;
      this.updateLocalStorage();
    }
    this.cartItemsSubject.next(this.cartItems);
  }

  getCartItems(): Foods [] {
    return this.cartItems;
  }


  getCartItemCount(): number{
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }

  clearCart(): void{
    this.cartItems= [];
    this.updateLocalStorage();
  }
  private updateLocalStorage(): void{
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  
}
