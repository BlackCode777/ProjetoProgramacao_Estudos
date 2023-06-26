import { Component } from '@angular/core';
import { FoodListServService } from 'src/app/food-list/food-list-serv.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent {

  constructor( private foodListServService: FoodListServService ) { }
  ngOnInit(): void {}

  // create method for add new food
  public listAddValue(food: string){
    return this.foodListServService.addFood(food);
    //console.log(food);
  }
  

}
