//import { forEach } from '@angular/router/src/utils/collection';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchPipe'
})

export class SearchPipePipe implements PipeTransform {

    constructor() { }

    transform(value: any[], columns:string, filter:any) {
        let resultArray = [];

        if (filter != null && filter != "") {
            //if (isNaN(filter)) {
            //    for (let item of value) {
            //        if (item.name.includes(filter)) {
            //            resultArray.push(item);
            //        }
            //    }
            //    return resultArray;
            //} else {
            //    for (let item of value) {
            //        if (item.Description.includes(filter)) {
            //            resultArray.push(item);
            //        }
            //}
                for (let item of value) {
                    if (item[columns].includes(filter)) {
                        resultArray.push(item);
                    }
                }
            
            

                return resultArray;
            //}
        }
        return value;
    }
}