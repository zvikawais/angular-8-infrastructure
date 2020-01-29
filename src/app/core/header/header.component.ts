import { Component, OnInit } from '@angular/core';
import { globals } from 'src/app/globals/globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routes = globals().APP_ROUTES;
  constructor() { }

  ngOnInit() {
  }

}
