import { User } from './user.model';

export class ResolvedUserList {
    constructor(public userList: User[], 
        public error: any = null) {}
}