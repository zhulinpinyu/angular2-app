import {Component} from 'angular2/core'

@Component({
  selector: 'my-puzzle',
  template: `
    <section class="setup">
      <h2>Game Setup</h2>
      Enter your name please:
      <input type="text"/>
    </section>
    <section class="puzzle">
      <h2>The Puzzle</h2>
      <p>ok, welcome <span class="name">XXX</span></p>
      <br />
      Switch 1:
      <input type="text" /><br />
      Switch 2:
      <input type="text" /><br />
      Switch 3:
      <input type="text" /><br />
      Switch 4:
      <input type="text" /><br />
      <h3>Congratulations XXX,you do it.</h3>
    </section>
  `
})
export class PuzzleComponent{

}