import {Component} from "angular2/core"

@Component({
  selector: "my-component",
  template: `
    <h3>
    Hi {{name}},this my custom Component.<span [class.is-awesome]="input.value==='Yes'">It is so Awesome.</span>
    </h3>
    Is it Awesome?
    <input type="text" #input (keyup)="0"/>
  `,
  styleUrls: ["src/css/my-component.css"]
})
export class MyComponentComponent{
  name = "zhulinpinyu"
}