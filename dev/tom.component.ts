import {Component, OnInit} from 'angular2/core'
import {RouteParams, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {TomMainComponent} from './tom-main.component'
import {TomSubComponent} from './tom-sub.component'

@Component({
    selector: 'tom',
    template: `
        <h3>Hi I am Tom.</h3>
        I am really <b>{{sex}}</b>
          <br />
        {{opt}}

        <ul>
            <li><a [routerLink]="['TomMain']">Main</a></li>
            <li><a [routerLink]="['TomSub']">Sub</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', name: 'TomMain', component: TomMainComponent, useAsDefault: true},
    { path: '/sub', name: 'TomSub', component: TomSubComponent},

])
export class TomComponent implements OnInit{
    sex:string
    opt:string

    constructor(private _routeParams: RouteParams){}

    ngOnInit(){
        this.sex = this._routeParams.get('sex')
        this.opt = this._routeParams.get('opt')
    }
}