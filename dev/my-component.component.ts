import {Component, OnInit} from "angular2/core"
import {TestComponent} from './test.component'

@Component({
  selector: "my-component",
  template: `
    <h3>
    Hi <span [style.color]="input.value ==='yes' ? 'red' : ''">{{name}}</span>,this my custom Component.<span [class.is-awesome]="input.value==='yes'">It is so Awesome.</span>
    </h3>
    Is it Awesome?
    <input type="text" #input (keyup)="0"/>
    <br>
    <br>
    <button [disabled]="input.value !== 'yes'">Enable if type 'yes'</button>
    <test></test>
  `,
  directives: [TestComponent],
  styleUrls: ["src/css/my-component.css"]
})
export class MyComponentComponent implements OnInit{
  name:String;

  ngOnInit(){
    this.name = "zhulinpinyu"
  }

}