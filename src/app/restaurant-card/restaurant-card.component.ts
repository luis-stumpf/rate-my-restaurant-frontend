import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})

export class RestaurantCardComponent implements OnInit {

  @Input() name: string;
  @Input() type: string;
  @Input() rating: number;

  constructor() { }

  ngOnInit(): void {
  }

}



