import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: any;
  redirectUrl: string;
  getAuthorizationToken() {
    return '';
  }

  constructor() { }
}
