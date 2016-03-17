import {Component,EventEmitter,Output} from 'angular2/core'

@Component({
  selector: 'my-input',
  template: `
    <h1>Your Details,Please</h1>
    <div>
      <label for="name">Your Name:</label>
      <input type="text" id="name" [(ngModel)]="myself.name" (keyup)="onKeyup()"/>
    </div>
    <div>
      <label for="age">Your Age:</label>
      <input type="text" id="age" [(ngModel)]="myself.age" (keyup)="onKeyup()"/>
    </div>
    <br />
    <div>isFilled: {{isFilled ? 'Yes' : 'No'}}</div>
    <div>isValid: {{isValid ? 'Yes' : 'No'}}</div>
    <br />
    <button [disabled]="!isValid" (click)="onsubmit()">submit</button>
  `,
  outputs: ['submitted']
})
export class InputComponet{
  myself = {name: '', age: ''}
  isFilled = false
  isValid = false
  submitted = new EventEmitter<{name:string, age:string}>()

  onKeyup(){
    if(this.myself.name !='' && this.myself.age !=''){
      this.isFilled = true
    }else{
      this.isFilled = false
    }

    if(this.myself.name !='' && /^\d+$/.test(this.myself.age)){
      this.isValid = true
    }else{
      this.isValid = false
    }
  }

  onsubmit(){
    this.submitted.emit(this.myself)
  }
}
