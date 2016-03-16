import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `
      <section class="parent">
        <h2>This is parent component</h2>
        <section class="child">
          <h3>This is child component</h3>
        </section>
      </section>
    `,
})
export class AppComponent {

}
