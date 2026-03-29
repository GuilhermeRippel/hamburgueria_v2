import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItemInterface } from '../interfaces/CartInterfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _cartItems = new BehaviorSubject<CartItemInterface[]>([]);
  cartItems$ = this._cartItems.asObservable();

  addItem(item: CartItemInterface) {
    const currentItems = this._cartItems.value;

    this._cartItems.next([...currentItems, item]);
  }

  removeItem(index: number) {
    const updated = this._cartItems.value.filter((_, i) => i !== index);
    this._cartItems.next(updated);
  }

  getTotal() {
    return this._cartItems.value.reduce((total, item) => {
      return total + item.price;
    }, 0);
  }
}
