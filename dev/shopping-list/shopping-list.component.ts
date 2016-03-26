import {Component} from 'angular2/core'

@Component({
    template: `
        <h1>Shopping List</h1>
        <div>Edit Section</div>
        <div class="list">
            <button class="btn">Add new Item</button>
            <ul>
                <li>List items...</li>
            </ul>
        </div>
    `
})
export class ShoppingListComponent{

}