import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserDetailsGuardService implements CanActivate {
    constructor(private _userService: UserService,
        private _router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this._userService.getUser(+route.paramMap.get('id')).pipe(
            map(user => {
                // const userFound = !!this._userService.getUser(+route.paramMap.get('id'));
                const userFound = !!user;
                if (userFound) {
                    return true;
                } else {
                    this._router.navigate(['notfound']);
                    return false;
                }
            }),
            catchError((err) => {
                console.log(err);
                return Observable.of(false);
            })
        );

    }
}