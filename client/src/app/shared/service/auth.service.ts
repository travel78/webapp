import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private role: string;
  private isAuthorized: Subject<string> = new Subject();

  constructor(private router: Router) {
  }

  public pushIsAuthorized(role: string, isLogin: boolean) {
    this.role = role;
    if (isLogin) {
      this.navigateToHome();
    }
    this.isAuthorized.next(role);
  }

  public getIsAuthorizedStatic() {
    return this.role;
  }

  public getIsAuthorized() {
    return this.isAuthorized;
  }

  public logOut() {
    localStorage.setItem('token', '');
    this.pushIsAuthorized('none',true);
  }

  public navigateToHome() {
    switch (this.role) {
      case 'Person':
        this.router.navigate(['person']);
        break;
      case 'Company':
        this.router.navigate(['company']);
        break;
      case 'Admin':
        this.router.navigate(['admin']);
        break;
      default:
        this.router.navigate(['login']);
    }

  }
}
