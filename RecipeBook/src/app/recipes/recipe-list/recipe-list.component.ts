import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  // creating default instance of recipelist service by angular
  constructor(private recipeList: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //accessing the recipe list from provider store
    this.recipes = this.recipeList.getRecipies()
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

}
