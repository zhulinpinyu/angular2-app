import {Injectable} from 'angular2/core'
import {Http,Headers} from 'angular2/http'
import 'rxjs/Rx'
import {Observable} from 'rxjs/Rx'

@Injectable()
export class DataService{
    constructor(private _http: Http){}
    postData(data: any){
        const body = JSON.stringify(data)
        const headers = new Headers()
        headers.append('Content-type','application/json')
        return this._http.post('https://scorching-inferno-9975.firebaseio.com/data.json',body,{headers: headers}).map(res => res.json())
    }
    getData(){
      return this._http.get('https://scorching-inferno-9975.firebaseio.com/data.json').map(res => res.json())
    }
}
