import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() { }
  private ingredients: Ingredient[] = [
    new Ingredient('Rice', 1),
    new Ingredient('Egg', 3)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(inputIngredient: Ingredient) {
    this.ingredients.push(inputIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
