import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../feature.service';
import { Observable } from 'rxjs';
import { Feature } from 'src/app/models/feature.model';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  items$: Observable<Feature[]>;
  constructor(private featureService: FeatureService) { }

  ngOnInit() {
    this.items$ = this.featureService.dataSteam$;
  }

}
