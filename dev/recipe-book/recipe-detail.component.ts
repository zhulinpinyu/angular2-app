import {Component,OnInit} from 'angular2/core'
import {Recipe} from '../shared/recipe'
import {RouteParams} from 'angular2/router'
import {RecipeService} from './recipe.service'

@Component({
    templateUrl: 'templates/recipes/recipe-detail.tpl.html'
})
export class RecipeDetailComponent implements OnInit{
    recipe: Recipe
    private recipeIndex:string
    constructor(private _routerParams: RouteParams,private _recipeService: RecipeService){}

    ngOnInit(){
        let index = this._routerParams.get("recipeIndex")
        this.recipeIndex = index
        this.recipe = this._recipeService.getRecipe(index != null ? +index : null)||null
    }
}