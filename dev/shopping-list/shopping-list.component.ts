import {Component} from 'angular2/core'
import {ShoppingListNewItemComponent} from './shopping-list-new-item.component'

@Component({
    selector: 'shopping-list',
    template: `
        <section>
            <shopping-list-new-item (itemAdded)="onItemAdded($event)"></shopping-list-new-item>
        </section>
        <section>
            <h3>My List</h3>
            <div class="list">
                <ul>
                    <li *ngFor="#item of itemList">
                        {{item.name}} ({{item.amount}})
                    </li>
                </ul>
            </div>
        </section>
        <section>
            edit item
        </section>
    `,
    directives:[ShoppingListNewItemComponent]
})
export class ShoppingListComponent{
    itemList = new Array<{name:string,amount:number}>();
    onItemAdded(item: {name:string,amount:number}){
        this.itemList.push({name: item.name,amount: item.amount})
    }
}