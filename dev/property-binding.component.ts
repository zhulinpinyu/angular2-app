import {Component} from 'angular2/core'

@Component({
  selector: 'my-property-binding',
  template: `
    <h3>This is child component</h3>
    Hi {{myName}}, I am {{myAge}} years old.
  `,
  inputs: ['myName','myAge']
})
export class PropertyBindingComponent{
  myName = ''
  myAge = 0
}