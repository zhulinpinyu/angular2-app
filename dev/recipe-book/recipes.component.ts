import {Component} from 'angular2/core'
import {RecipeService} from './recipe.service'
import {RecipeListComponent} from './recipe-list.component'
import {RecipeDetailComponent} from './recipe-detail.component'
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
    selector: 'my-recipes',
    template: `
        <div class="master list">
            <my-recipe-list></my-recipe-list>
        </div>
        <div class="detail">
            <router-outlet></router-outlet>
        </div>
    `,
    providers: [RecipeService],
    directives: [RecipeListComponent,ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', name: 'RecipeDetail', component: RecipeDetailComponent, useAsDefault: true},
    { path: '/:editMode', name: 'RecipeEdit', component: RecipeDetailComponent}
])
export class RecipesComponent{

}