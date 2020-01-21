import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Rice', 1),
    new Ingredient('Egg', 3)
  ];
  constructor() { }

  ngOnInit() {
  }
  ingredientAdded(inputIngredient: Ingredient) {
    this.ingredients.push(inputIngredient);
  }

}
