import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Restaurant} from "../restaurant.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})

export class RestaurantCardComponent implements OnInit {

  @Input() name: string;
  @Input() type: string;
  @Input() rating: number;
  @Input() id: string;
  @Input() image: string
  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit(): void {
  }

}



