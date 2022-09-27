import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }
}

export class Dish {
  id: string;
  name: string;
  price: number;
  category: string;
}

export class Restaurant {
  id: string;
  name: string;
  type: string;
  rating: number;
  menu?: (Dish[]) | null;
}

