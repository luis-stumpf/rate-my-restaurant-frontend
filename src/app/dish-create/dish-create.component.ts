import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Dish} from "../restaurant.service";

@Component({
  selector: 'app-dish-create',
  templateUrl: './dish-create.component.html',
  styleUrls: ['./dish-create.component.scss']
})
export class DishCreateComponent implements OnInit {

  result: Dish

  constructor(private route: ActivatedRoute, private client: HttpClient) { }

  ngOnInit(): void {
  }

  submitDish(dish: string, price: string){

    let json = {
      name: dish,
      price: parseFloat(price)
    }
    let header = new HttpHeaders().set('restaurantId', this.route.snapshot.params['id'].toString())
    let options = { headers: header }
    console.log(this.route.snapshot.params['id'])

    this.result = Object.assign(new Dish(), json)
    this.client.post(
      'http://localhost:8080/api/addDish', this.result, options
      )
      .subscribe((res) => {
        console.log(res)
      })
  }

}
