import {Component} from 'angular2/core'
import {ShoppingListNewItemComponent} from './shopping-list-new-item.component'
import {ListItem} from '../list-item'
import {ShoppingListItemComponent} from './shopping-list-item.component'

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
                    <li *ngFor="#item of itemList" (click)="onSelected(item)">
                        {{item.name}} ({{item.amount}})
                    </li>
                </ul>
            </div>
        </section>
        <section *ngIf = "selectItem != null">
            <shopping-list-item [item]="selectItem" (remove)="onRemove($event)" ></shopping-list-item>
        </section>
    `,
    directives:[ShoppingListNewItemComponent,ShoppingListItemComponent]
})
export class ShoppingListComponent{
    itemList = new Array<ListItem>();
    selectItem: ListItem

    onItemAdded(item: ListItem){
        this.itemList.push({name: item.name,amount: item.amount})
    }

    onSelected(item: ListItem){
        this.selectItem = item;
    }

    onRemove(item: ListItem){
        this.itemList.splice(this.itemList.indexOf(item),1)
        this.selectItem = null
    }
}