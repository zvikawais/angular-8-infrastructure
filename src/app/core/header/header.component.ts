import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { globals } from '../../../app/globals/globals';
import { AuthService } from '../../../app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routes = globals().APP_ROUTES;
  isLoggedIn$: Observable<boolean>;
  isCollapsed = true;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedInStream$;
  }

  loginClicked() {
    this.authService.login('John', 'Due');
  }

  logoutClicked() {
    this.authService.logout();
  }
}
