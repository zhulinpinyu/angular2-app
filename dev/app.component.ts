import {Component} from 'angular2/core';
import {InputComponent} from './bindings/input.component';
import {ConfirmComponent} from './bindings/confirm.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
          <my-input (submitted)="onsubmit($event)" [myself]="myself"></my-input>
        </div>
        <div class="container">
          <my-confirm (confirmed)="onconfirm($event)" [myself]="confirmedMyself"></my-confirm>
        </div>
    `,
    directives: [InputComponent,ConfirmComponent]
})
export class AppComponent {
  myself = {name:'',age:''}
  confirmedMyself = {name:'',age:''}

  onsubmit(myself: {name:string,age:string}){
    this.confirmedMyself = {name: myself.name, age:myself.age};
  }

  onconfirm(myself: {name:string,age:string}){
    this.myself = {name:myself.name, age:myself.age};
  }
}
