import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { ResolvedUserList } from '../models/resolved-userlist.model';

@Injectable()
export class UserListResolverService implements Resolve<User[] | string> {
    constructor(private _userService: UserService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[] | string> {
        return this._userService.getUsers()
            .pipe(
              //  map((userList) => new ResolvedUserList(userList)),
                catchError((err: string) => Observable.of(err))
            );
    }
}