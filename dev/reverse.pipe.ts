import {Pipe,PipeTransform} from 'angular2/core'

@Pipe({
    name: 'myReverse'
})
export class ReversePipe implements PipeTransform{
    transform(val:string,args:any){
        const length = val.length
        let result=''
        for (let i = 0; i < length;i++){
            result = val[i]+result
        }
        return result
    }
}