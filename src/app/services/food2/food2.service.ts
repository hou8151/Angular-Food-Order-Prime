import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class Food2Service {
  foodList =[
    {
  id :1 ,
  name : 'pizza pep',
  cookTime :'10-20',
  price: 10,
  favorite: false ,
  origins:['italien,spain' ],
  star: 4.5,
  imageUrl: '/assets/food-1.jpg',
  tags:['FastFood','pizza','Lunch'],
  rating:1.5,

},
{
  id :2,
  name : 'metabel',
  cookTime :'20-30',
  price: 20,
  favorite: true,
  origins: ['china,india'],
  star:4.7,
  imageUrl: '/assets/food-2.jpg',
  tags:['slowFood','Lunch'],
  rating:4,

},
{
  id :3,
  name : 'hambuger',
  cookTime :'10-15',
  price: 5,
  favorite: true,
  origins: ['germany,us'],
  star:3.5,
  imageUrl: '/assets/food-3.jpg',
  tags:['fastFood','Lunch'],
  rating:3,

},
{
  id :4,
  name : 'fired',
  cookTime :'15-20',
  price: 2,
  favorite: false,
  origins: ['france,belguim'],
  star:4.7,
  imageUrl: '/assets/food-4.jpg',
  tags:['fastFood','Fry'],
  rating:2,

},
{
  id :5,
  name : 'soup',
  cookTime :'40-50',
  price: 11,
  favorite: false,
  origins: ['tunisie'],
  star:3.7,
  imageUrl: '/assets/food-5.jpg',
  tags:['slowFood','soup'],
  rating:1,

},
{
  id :6,
  name : 'vegetable pizza',
  cookTime :'40-50',
  price: 9,
  favorite: false,
  origins: ['italien'],
  star:4.7,
  imageUrl: '/assets/food-6.jpg',
  tags:['pizza','fastfood','Lunch'],
  rating:5,

},
{
  id :7,
  name : 'vegetable spicy pizza',
  cookTime :'20-30',
  price:10,
  favorite: false,
  origins: ['indian'],
  star:4.0,
  imageUrl: '/assets/food-7.jpg',
  tags:['pizza','fastfood','Lunch'],
  rating:5,

},
{
  id :6,
  name : 'vegetable burgur',
  cookTime :'10-15',
  price: 5,
  favorite: true,
  origins: ['indian,asia'],
  star:4.0,
  imageUrl: '/assets/food-8.jpg',
  tags:['pizza','fastfood','Lunch'],
  rating:3,

}

  ];
  constructor() { }
  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }
  getAllFoodByTag(tag:string) : Foods[] {
    //if(tag =='All')
    //return this.getAll()
   // else
   // return this.getAll().Filter(food => food tags?.includes(tag));
 // 2eme methode and is very simply
 return tag =="All"?
 this.getAll() :this.getAll().filter (food => food.tags?.includes(tag));
}
getAllTag():tag[]{
  return[
    { name: 'All' , count: 8 },
    { name: 'FastFood' , count: 6 },
    { name: 'Pizza' , count: 4 },
    { name: 'Lunch' , count: 2 },
    { name: 'SlowFood' , count: 6 },
    { name: 'Hamburger' , count: 7 },
    { name: 'Fry' , count: 3},
    { name: 'Soup' , count: 1 },
  ]
}
  
  
  getAll(): Foods[] {
    return this.foodList;
  }
  
  patchfood(id:number,newRatingValue:number){
    this.foodList.forEach(element => {
      if(element.id===id) {
        element.rating=newRatingValue
      }
    });


  }

}
