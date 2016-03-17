import {Component} from 'angular2/core';
import {HighLightDirective} from './highlight.directive';

@Component({
    selector: 'app',
    template: `
      <div [myHighLight]>Highlight</div>
      <br />
      <br />
      <div [myHighLight]="'yellow'">Second HighLight</div>
    `,
    directives: [HighLightDirective]
})
export class AppComponent {
  
}
