import {Component,Input} from 'angular2/core'

@Component({
  selector: 'my-property-binding',
  template: `
    <h3>This is child component</h3>
    Hi {{myName}}, I am {{age}} years old.
  `,
  inputs: ['myName']
})
export class PropertyBindingComponent{
  myName = ''
  @Input('myAge') age = 10
}