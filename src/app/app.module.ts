import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from "@angular/common/http";
import { FeedComponent } from './feed/feed.component';
import { RouterModule, Routes } from "@angular/router";
import * as path from "path";
import { RestaurantViewComponent } from './restaurant-view/restaurant-view.component';
import { DishComponent } from './dish/dish.component';

const routes: Routes = [
  { path: 'restaurant/:id', component: RestaurantViewComponent},
  { path: '', component: FeedComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaurantCardComponent,
    FeedComponent,
    RestaurantViewComponent,
    DishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
