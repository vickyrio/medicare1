import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-Item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItem: CartItem[]=[
    // new CartItem(1, 2,'Test1', 3, 344),
    // new CartItem(2, 5,'Test1', 3, 455),
    // new CartItem(3, 6,'Test1', 3, 655),
    // new CartItem(4, 7,'Test1', 3, 865),

  ]
  constructor() { }
  getcartItem(): CartItem[]{
    return this.cartItem;
 }
}
