export class Foods{
    id!:number;
    name!:string;
    cookTime!:string;
    price!:number;
    favorite:boolean = false ;
    origins!:string[];
    star:number = 0;
    imageUrl!:string;
    tags?:string[];
    rating:number = 0
}
