import {Component,OnInit} from 'angular2/core'
import {Recipe} from '../shared/recipe'
import {RecipeService} from './recipe.service'
import {Router} from 'angular2/router'

@Component({
    selector: 'my-recipe-list',
    template:`
        <button class="btn" (click)="onAddRecipe()">Add Recipe</button>
        <ul>
            <li *ngFor="#recipe of recipes" (click)="onSelect(recipe)">
                <div class="img">
                    <img [src]="recipe.imageUrl" alt="Recipe"/>
                </div>
                <div class="text">{{recipe.name}}</div>
            </li>
        </ul>
    `
})
export class RecipeListComponent implements OnInit{
    recipes: Recipe[]
    constructor(private _recipeService: RecipeService,private _router: Router){}

    ngOnInit(){
        this.recipes = this._recipeService.getAllRecipes()
    }

    onSelect(recipe: Recipe){
        this._router.navigate(['RecipeDetail',{"recipeIndex": Number(this._recipeService.getRecipeIndex(recipe))}])
    }
}