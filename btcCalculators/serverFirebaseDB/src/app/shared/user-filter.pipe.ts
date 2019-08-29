import { PipeTransform, Pipe } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
    name: 'userFilter',
    //pure: false // n. Bad news  - runs on every single change detection!!
})
export class UserFilterPipe implements PipeTransform {
    private counter = 0;
    transform(users: User[], searchTerm: string): User[] {
        this.counter++;
        //document.write('Filter pip executed count ' + this.counter);
        console.log('Filter pip executed count ' + this.counter);
        if (!users || !searchTerm) {
            return users;
        }
        return users.filter(user => 
            user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1); // look! don't touchc
    }
}


