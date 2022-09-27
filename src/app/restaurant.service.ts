import { Injectable } from '@angular/core';
import {Subscriber} from "rxjs";

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
}

export class Restaurant {
  id: string;
  name: string;
  type: string;
  image: string
  rating: number;
  menu?: (Dish[]) | null;
}

export function handleUpload(picture: File, subscriber: Subscriber<any>) {
        let reader = new FileReader()
        reader.readAsDataURL(picture)

        reader.onload = () => {
          subscriber.next(reader.result)
          subscriber.complete()
        }
}


