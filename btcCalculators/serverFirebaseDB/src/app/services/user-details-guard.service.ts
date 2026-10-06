import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AdminService } from '../../admin.service';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsGuardService implements CanActivate {
  constructor(
    private adminService: AdminService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    const email = route.paramMap.get('email');

    if (!email) {
      this.router.navigate(['notfound']);
      return of(false);
    }

    return this.adminService.loadUserByEmail(email).pipe(
      map((user) => {
        if (user) {
          return true;
        }

        this.router.navigate(['notfound']);
        return false;
      }),
      catchError((err) => {
        console.log(err);
        this.router.navigate(['notfound']);
        return of(false);
      }),
    );
  }
}