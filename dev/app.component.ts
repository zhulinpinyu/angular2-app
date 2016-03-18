import {Component} from 'angular2/core';
import {TemplateDrivenFormComponent} from './template-driven-form.component'

@Component({
    selector: 'app',
    template: `
      <template-driven-form></template-driven-form>
    `,
    directives: [TemplateDrivenFormComponent]
})
export class AppComponent{
  
}
