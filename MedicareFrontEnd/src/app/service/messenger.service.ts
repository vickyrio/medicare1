import { CartItem } from './../model/cart-Item';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  cartItems: CartItem[] = [];

  subject1 = new Subject();
  subject2 = new Subject();
  subject3 = new Subject();

  private paramSource = new BehaviorSubject(null);
  sharedParam = this.paramSource.asObservable();

  private paramSource2 = new BehaviorSubject(null);
  sharedParam2 = this.paramSource2.asObservable();
  
  constructor() { }

  sendDecMsg(cartItem) {
    console.log(cartItem);
    this.subject2.next(cartItem); //Triggering an event
  }
  getDecMsg(){
    return this.subject2.asObservable();
  }

  sendBuyMsg(cartItem){
    console.log(cartItem);
    this.subject3.next(cartItem); //Triggering an event
  }
 
  getBuyMsg(){
    return this.subject3.asObservable();
  }

  sendMsg(product){
    console.log(product);
    this.subject1.next(product); //Triggering an event
  }

  getMsg(){
    return this.subject1.asObservable();
  }

  changeParam(cartItems) {
    this.paramSource.next(cartItems)
  }

  changeParam2(cartTotal) {
    this.paramSource2.next(cartTotal)
  }

}
