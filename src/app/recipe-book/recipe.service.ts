import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Omurice',
      'Japanese egg rice dish',
      'https://www.196flavors.com/wp-content/uploads/2019/11/omurice-3-FP.jpg',
      [
        new Ingredient('Rice', 2),
        new Ingredient('Ketchup', 1),
        new Ingredient('Egg', 4),
        new Ingredient('Assorted Veggies', 1)
      ]
    ),
    new Recipe(
      'Red bean pancake',
      'Yum',
      'https://du7ybees82p4m.cloudfront.net/54f6bceeec9118.78712916.jpg?width=910&height=512',
      [
        new Ingredient('Red Beans', 2),
        new Ingredient('Flour', 4),
        new Ingredient('Water', 1),
        new Ingredient('yeast', 1)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }
  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
