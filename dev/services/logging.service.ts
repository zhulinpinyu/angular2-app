import {Injectable} from 'angular2/core'

@Injectable()
export class LoggingService{
    private _lastMessage:string

    log(message:string){
        console.log("Current: "+message+" Last:" + this._lastMessage)
        this._lastMessage = message
    }
}