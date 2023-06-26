import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './shared/food-add/food-add.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodAddComponent
  ],
  exports: [FoodAddComponent, FoodListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
