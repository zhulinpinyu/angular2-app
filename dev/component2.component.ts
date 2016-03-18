import {Component} from 'angular2/core'
import {LoggingService} from './services/logging.service'

@Component({
    selector: 'component-2',
    template: `
        <input type="text" #input/>
        <button (click)="onClick(input.value)">Send</button>
    `,
    providers: [LoggingService]
})
export class Component2Component{
    constructor(private _loggingService: LoggingService){}

    onClick(message:string){
        this._loggingService.log(message)
    }
}