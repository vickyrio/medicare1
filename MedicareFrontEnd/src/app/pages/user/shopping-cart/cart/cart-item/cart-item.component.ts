import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-Item';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  cartItem : CartItem;
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  handleDecrement(){
    this.msg.sendDecMsg(this.cartItem);
  }

}
