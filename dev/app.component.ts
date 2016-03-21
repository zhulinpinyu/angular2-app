import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {TomComponent} from './tom.component'
import {LucyComponent} from './lucy.component'

@Component({
    selector: 'app',
    template: `
        <ul>
            <li><a [routerLink]="['Tom',{sex: 'man',opt: 'this is optional'}]" >Tom</a></li>
            <li><a [routerLink]="['Lucy']" >Lucy</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/tom/:sex', name: 'Tom', component: TomComponent, useAsDefault: true },
    { path: '/lucy', name: 'Lucy', component: LucyComponent }
])
export class AppComponent{

}
