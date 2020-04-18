import { Recipe } from '../recipes/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            ' This is simply a test',
            'https://previews.123rf.com/images/siraphol/siraphol1405/siraphol140503218/28187592-french-fries-and-fried-chicken-isolated-white-background.jpg',
            [
                new Ingredient('Meat', 2),
                new Ingredient('French fries', 40)
            ]),
        new Recipe(
            'What else do need to say?',
            ' This is simply a test',
            'https://i.insider.com/5d8ca1222e22af53447766c2?width=1100&format=jpeg&auto=webp',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]),
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipies() {
        return this.recipes.slice()
    }

    getRecipe(index:number){
        return this.recipes[index]
    }

    onAddIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
    }
}