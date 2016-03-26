import {Component,OnInit} from 'angular2/core'
import {Recipe} from '../shared/recipe'
import {RecipeService} from './recipe.service'

@Component({
    selector: 'my-recipe-list',
    template:`
        <button class="btn" (click)="onAddRecipe()">Add Recipe</button>
        <ul>
            <li *ngFor="#recipe of recipes">
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
    constructor(private _recipeService: RecipeService){}

    ngOnInit(){
        this.recipes = this._recipeService.getAllRecipes()
    }
}