import { Component, OnInit } from '@angular/core';
import { Food2Service } from '../services/food2/food2.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   foods:Foods[]=[];
  

  constructor(private fs:Food2Service ,private router:ActivatedRoute ) {}

  ngOnInit(): void {
   this.router.params.subscribe( params => {
    if(params['searchItem'])
    this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
    else if(params['tag'])
    this.foods=this.fs.getAllFoodByTag(params['tag'])
    else 
    this.foods = this.fs.getAll();//done 
   })



    

  }
  onRate($event:any,id:number) {
    const newRatingValue = $event.newValue
    this.fs.patchfood(id,newRatingValue)
    this.foods = this.fs.getAll();//done
  }

}
