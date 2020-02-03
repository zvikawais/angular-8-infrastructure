import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  // tslint:disable-next-line: variable-name
  private _isLoggedIn = new BehaviorSubject(false);
  isLoggedInStream$ = this._isLoggedIn.asObservable();
  redirectUrl: string;

  get token(): string {
    return '';
  }

  constructor(private router: Router) { }

  login(username: string, pass: string) {
    this._isLoggedIn.next(true);
  }

  logout() {
    this._isLoggedIn.next(false);
    this.router.navigateByUrl('/auth/sign-in');
  }
}
