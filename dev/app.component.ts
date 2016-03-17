import {Component} from 'angular2/core';
import {HighLightDirective} from './highlight.directive';
import {UnlessDirective} from './unless.directive';

@Component({
    selector: 'app',
    template: `
      <div [myHighLight]>Highlight</div>
      <br />
      <div [myHighLight]="'yellow'">Second HighLight</div>
      <hr/>
      Show tips:
      <input type="text" #condition (keyup)="0"/>
      <div *myUnless="condition.value != 'false'">
          show this when you type false
      </div>
    `,
    directives: [HighLightDirective,UnlessDirective]
})
export class AppComponent{
  
}
