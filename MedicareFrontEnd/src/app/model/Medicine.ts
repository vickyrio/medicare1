import { Category } from './Category';
export class Medicine {
    id: number;
    name: string;
    seller: string;
    prodDesc: string;
    offers: string;
    price: number;
    category: Category; 
    active: boolean;

    constructor (id, name, seller='', prodDesc='', offers='', price = 0, category, active){

      this.id = id
      this.name = name
      this.prodDesc = prodDesc
      this.price = price
      this.offers = offers
      this.category = category
      this.active = active
      this.seller = seller

    }
    }