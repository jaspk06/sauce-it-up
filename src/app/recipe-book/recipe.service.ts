import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
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
      'Red Bean Pancake',
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
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }
  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
