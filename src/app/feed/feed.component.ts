import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from "../restaurant.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  @Input() restaurants: Restaurant[]

  constructor(private client: HttpClient) { }

  ngOnInit(): void {
    this.client.get('http://localhost:8080/api/restaurants')
      .subscribe((data: Restaurant[]) => this.restaurants = data)
  }

}
