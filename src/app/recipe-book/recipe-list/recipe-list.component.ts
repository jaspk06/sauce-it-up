import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Omurice', 'rice, ketchup, egg, veggies', 'https://www.196flavors.com/wp-content/uploads/2019/11/omurice-3-FP.jpg'
    )
  ];
  @Output() sendRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  outputRecipe(recipeEl: Recipe) {
    this.sendRecipe.emit(recipeEl);
  }

}
