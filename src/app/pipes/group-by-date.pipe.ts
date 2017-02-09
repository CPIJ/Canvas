import {Pipe,PipeTransform} from '@angular/core'; 
import {plannedItem} from '../../app/components/calendar/plannedItem'; 
@Pipe({name:'GroupByDate'}) 
export class GroupByDatePipe implements PipeTransform{ 
  transform(value: Array<plannedItem>): Array<any> { 

    const groupedObj = value.reduce((prev, cur)=> {   
      if(!prev[cur.start.split('T')[0]]) { 
        prev[cur.start] = [cur]; 
      } else {
        prev[cur.start].push(cur.start.split('T')[0]);
      }
      return prev;
    }, {});  
    console.log(Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] })));
    return Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] })); 
    }
} 