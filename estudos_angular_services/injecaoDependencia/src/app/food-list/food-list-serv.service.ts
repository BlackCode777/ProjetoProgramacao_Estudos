import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListServService {

  /* create list of foods */
  private list: Array<string> = [
    'Arroz',
    'Feijão',
    'Macarrão',
    'Carne',
    'Frango',
    'Peixe',
    'Ovo',
  ]

  constructor() { }

  // create method for return list of foods
  public getList(){
    return this.list;
  }

}
