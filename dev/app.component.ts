import {Component} from 'angular2/core'
import {DataService} from './data.service'

@Component({
    selector: 'app',
    template: `
        <div>
            <div class="input">
                <label for="title">title</label>
                <input type="text" id="title" #title/>
            </div>
            <div class="input">
                <label for="Body">body</label>
                <input type="text" id="body" #body/>
            </div>
            <div class="input">
                <label for="UserID">UserID</label>
                <input type="text" id="userId" #userId/>
            </div>
            <button (click)="onPost(title.value,body.value,userId.value)">Post</button>
            <button (click)="onGet()">Get Data</button>
            <div>
                Response: {{response}}
            </div>
        </div>
    `,
    providers: [DataService]
})
export class AppComponent{
    response:string
    constructor(private _dataService: DataService){}

    onPost(title:string,body:string,userId:string){
        const data = {
            title: title,
            body: body,
            userId: userId
        }
        this._dataService.postData(data)
            .subscribe(
                res => this.response = JSON.stringify(res),
                err => console.log(err)
            )
    }
}
