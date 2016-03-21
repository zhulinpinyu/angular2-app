import {Component, OnInit} from 'angular2/core'
import {RouteParams} from 'angular2/router'

@Component({
    selector: 'tom',
    template: `
        <h3>Hi I am Tom.</h3>
        I am really <b>{{sex}}</b>
          <br />
        {{opt}}
    `
})
export class TomComponent implements OnInit{
    sex:string
    opt:string

    constructor(private _routeParams: RouteParams){}

    ngOnInit(){
        this.sex = this._routeParams.get('sex')
        this.opt = this._routeParams.get('opt')
    }
}