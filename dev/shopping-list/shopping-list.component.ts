import {Component,OnInit} from 'angular2/core'
import {ShoppingListNewItemComponent} from './shopping-list-new-item.component'
import {ListItem} from '../list-item'
import {ShoppingListItemComponent} from './shopping-list-item.component'
import {ShoppingListService} from './shopping-list.service'

@Component({
    selector: 'shopping-list',
    template: `
        <section>
            <shopping-list-new-item></shopping-list-new-item>
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
    directives:[ShoppingListNewItemComponent,ShoppingListItemComponent],
    providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit{
    itemList:Array<ListItem>;
    selectItem: ListItem
    constructor(private _shoppingListSerivce:ShoppingListService){}

    ngOnInit(){
        this.itemList = this._shoppingListSerivce.getItems();
    }

    onSelected(item: ListItem){
        this.selectItem = item;
    }

    onRemove(item: any){
        this.selectItem = null
    }
}