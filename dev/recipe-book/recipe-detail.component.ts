import {Component,OnInit} from 'angular2/core'
import {Recipe} from '../shared/recipe'
import {RouteParams} from 'angular2/router'
import {RecipeService} from './recipe.service'

@Component({
    templateUrl: 'templates/recipes/recipe-detail.tpl.html'
})
export class RecipeDetailComponent implements OnInit{
    recipe: Recipe
    private recipeIndex:number
    constructor(private _routerParams: RouteParams,private _recipeService: RecipeService){}

    ngOnInit(){
        this.recipeIndex = +this._routerParams.get("recipeIndex")
        this.recipe = this._recipeService.getRecipe(this.recipeIndex)||null
    }
}