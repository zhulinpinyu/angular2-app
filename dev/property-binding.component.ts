import {Component,Input,EventEmitter} from 'angular2/core'

@Component({
  selector: 'my-property-binding',
  template: `
    <h3>This is child component</h3>
    Hi {{name}}, I am {{age}} years old.
    <br/>
    <br/>
    My habbies:
    <input type="text" (keyup)="onHabbiesChanged(habbies.value)" #habbies/>
  `,
  inputs: ['name:myName'],
  outputs: ['habbiesChanged']
})
export class PropertyBindingComponent{
  name = ''
  @Input('myAge') age = 10

  habbiesChanged = new EventEmitter();

  onHabbiesChanged(habbies: String){
    this.habbiesChanged.emit(habbies)
  }
}