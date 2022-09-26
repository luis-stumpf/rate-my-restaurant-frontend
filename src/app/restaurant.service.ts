import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }
}

export class Menu {
  id: string;
  name: string;
  price: number;
  category: string;
}

export class Restaurant {
  id: string;
  name: string;
  type: string;
  menu?: (Menu[]) | null;
}

