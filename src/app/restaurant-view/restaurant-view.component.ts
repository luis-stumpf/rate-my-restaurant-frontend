import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Restaurant} from "../restaurant.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-restaurant-view',
  templateUrl: './restaurant-view.component.html',
  styleUrls: ['./restaurant-view.component.scss']
})
export class RestaurantViewComponent implements OnInit {

  @Input() restaurant: Restaurant

  constructor(private route: ActivatedRoute, private client: HttpClient) { }

  ngOnInit(): void {
    this.client.get('http://localhost:8080/api/find?restaurant='+ this.route.snapshot.params['id'])
      .subscribe((data: Restaurant) => this.restaurant = data)
  }

}
