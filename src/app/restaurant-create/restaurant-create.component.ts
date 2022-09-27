import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {handleUpload, Restaurant} from "../restaurant.service";
import {Observable, Subscriber} from "rxjs";

@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.scss']
})
export class RestaurantCreateComponent implements OnInit {

  result: Restaurant
  pictureBin: Observable<any>

  constructor(private client: HttpClient) { }

  ngOnInit(): void {
  }

  convertToBase64(file: File) {
    this.pictureBin = new Observable((subscriber: Subscriber<any>) => {
      handleUpload(file, subscriber);
    });
  }

  submitRest(name: string, type: string, picture: File){

    this.convertToBase64(picture)
    this.pictureBin.subscribe((d) =>{
      let json  = {
        name: name,
        type: type,
        image: d.toString()
      }
      this.result = Object.assign(new Restaurant(), json)
      this.client.post('http://localhost:8080/api/create', this.result)
        .subscribe((res) => {
          console.log(res)
        })
    })

  }


}
