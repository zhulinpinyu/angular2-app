import {Component} from 'angular2/core';
import {DataDrivenFormComponent} from './data-driven-form.component'

@Component({
    selector: 'app',
    template: `
      <data-driven-form></data-driven-form>
    `,
    directives: [DataDrivenFormComponent]
})
export class AppComponent{
  
}
