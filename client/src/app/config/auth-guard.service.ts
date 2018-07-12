import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { HttpService } from '../shared/service/http.service';


@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private http: HttpService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.http.isAthorized().map(
      res => {
        if (res.role !== route.data.role) {
          this.router.navigate(['login']);
        }
        return res.role === route.data.role;
      }
    );
  }
}
