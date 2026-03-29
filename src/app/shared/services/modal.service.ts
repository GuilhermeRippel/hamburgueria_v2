import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _showCart = new BehaviorSubject<boolean>(false);
  showCart$ = this._showCart.asObservable();

  openCart() {
    this._showCart.next(true);
  }

  closeCart() {
    this._showCart.next(false);
  }

  toggleCart() {
    this._showCart.next(!this._showCart.value);
  }

}
