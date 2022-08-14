import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Food2Service } from '../services/food2/food2.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!:Foods ;

  constructor(private activatedRoute:ActivatedRoute, private food2Service:Food2Service,
     private cartService:CartService, private router:Router) {
    activatedRoute.params.subscribe((params)=>{
      if(params ['id'])
      this.food = food2Service.getFoodById(params['id'])
    })
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
