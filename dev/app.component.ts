import {Component} from 'angular2/core';
import {InputComponet} from './bindings/input.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
          <my-input (submitted)="onsubmit($event)"></my-input>
        </div>
        <div class="container">
          ...
        </div>
    `,
    directives: [InputComponet]
})
export class AppComponent {
  myself = {name:'',age:''}
  confirmedMyself = {name:'',age:''}
}
