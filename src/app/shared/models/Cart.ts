import { CartItem } from "./CartItem";

export class Cart{
    items:CartItem[] =[];

    get totalPrice():number{
        //any
        let totalPrice :any= 0 ;
        this.items.forEach(item => {
            totalPrice += item.price;
        });
        return totalPrice;
    }
}