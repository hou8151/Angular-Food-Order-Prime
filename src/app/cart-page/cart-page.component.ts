import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) { 
    this.setCart();
  }

  ngOnInit(): void {
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
  removeFormCart(cartItme: CartItem){
    this.cartService.removeFromCart(cartItme.food.id);
    this.setCart(); //instance Load data
  }
  //je change type quantityInString:string a quantityInString:any
 changeQuantity(cartItem: CartItem, quantityInString:any){
  const quantity = parseInt( quantityInString ) ;
  this.cartService.changeQuantity(cartItem.food.id, quantity);
  this.setCart();
}


}
