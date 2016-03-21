import {Component} from 'angular2/core'
import {Router} from 'angular2/router'

@Component({
    selector: 'lucy',
    template: `
        <h3>Hi I am Lucy.</h3>
        <button (click)="onNav()">Go to Tom</button>
    `
})
export class LucyComponent{
    constructor(private _router: Router){}

    onNav(){
        this._router.navigate(['Tom',{sex: 'mannnn'}])
    }
}