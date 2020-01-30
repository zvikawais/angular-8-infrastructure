import { Component, OnInit } from '@angular/core';
import { globals } from 'src/app/globals/globals';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  routes = globals().APP_ROUTES;
  constructor() { }

  ngOnInit() {
  }

}
