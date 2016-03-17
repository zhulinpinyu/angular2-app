import {Component,EventEmitter} from 'angular2/core';

@Component({
  selector: 'my-confirm',
  template: `
    <h2>Pls confirm yourself info:</h2>
    <p>Your name is <span class="highlight">{{myself.name}}</span>,Your age is <span class="highlight">{{myself.age}}</span> years old.</p>
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
    <button [disabled]="!isValid" (click)="onsubmit()">confirm</button>
  `,
  outputs: ['confirmed'],
  inputs: ['myself']
})
export class ConfirmComponent{
  myself = {name: '',age: ''}
  isFilled = false
  isValid = false
  confirmed = new EventEmitter<{name:string, age:string}>()

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
    this.confirmed.emit(this.myself)
  }
}