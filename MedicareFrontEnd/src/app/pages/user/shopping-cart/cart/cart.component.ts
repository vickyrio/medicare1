import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-Item';
import { CartService } from 'src/app/service/cart.service';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  cartTotal = 0;


  constructor(private cartService: CartService, private msg: MessengerService, private _router: Router) { }
  ngOnInit() {
    this.msg.getMsg().subscribe(
      (product: any) => {
        console.log(product)
        this.addProductToCart(product);
      })
    this.msg.getDecMsg().subscribe(
      (cartItem: any) => {
        console.log(cartItem)
        this.decProductfromCart(cartItem)
      }
    )
  }


  addProductToCart(product: any) {
    console.log(product)
    let productExists = false;
    for (let i in this.cartItems) {
      if (this.cartItems[i].productId == product.id) {
        console.log(product.id)
        this.cartItems[i].qty++;
        productExists = true;
        break;
      }
    }
    if (!productExists) {
      const it = new CartItem(1, product.id, product.name, 1, product.price);
      this.cartItems.push(it);
    }
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

  

  decProductfromCart(cartItem: any) {
    let productExists = false;
    // this.cartItems=cartItem;
    for (let i in this.cartItems) {
      if (this.cartItems[i].productId == cartItem.id) {
        this.cartItems[i].qty--;
        productExists = true;
        break;
      }
    }
    if (!productExists) {
      console.log(this.cartItems +"added item")
            // const it = new CartItem(1, cartItem.id, cartItem.name, 1, cartItem.price);
      for (let i in this.cartItems) {
        if (this.cartItems[i].qty == 0) {
          this.cartItems.pop();
        } else {
          this.cartItems[i].qty--;
        }
      }
    }
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }


  buyMedicine() {
    this.msg.changeParam(this.cartItems);
    this.msg.changeParam2(this.cartTotal);
    this._router.navigate(['/user-dashboard/payment'])

  }
}
