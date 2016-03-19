import {Pipe,PipeTransform} from 'angular2/core'
import {ListItem} from './list-item'

@Pipe({
    name: 'myFilter'
})
export class FilterPipe implements PipeTransform{
    transform(val: ListItem[],args:string[]):any{
        if(val.length === 0){
            return val;
        }

        let result=[]
        for(let item of val){
            if(item.name.match('^.*'+args[0]+'.*$')){
                result.push(item)
            }
        }
        return result;
    }
}
