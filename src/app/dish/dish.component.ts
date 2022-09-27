import {Component, Input, OnInit} from '@angular/core';
import {Dish, Restaurant} from "../restaurant.service";

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  @Input() dish: Dish

  constructor() { }

  ngOnInit(): void {
  }

}
