import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import cloneDeep from 'lodash/cloneDeep';
import { Feature } from '../../../app/models/feature.model';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor() { }
  private store = [
    { name: 'first', release: 1.0 },
    { name: 'second', release: 2.0 },
    { name: 'third', release: 3.0 },
    { name: 'fourth', release: 4.0 }
  ];
  private dataSource = new BehaviorSubject<Feature[]>(cloneDeep(this.store));

  // Observable data streams
  dataSteam$ = this.dataSource.asObservable();

  pushItem(item: Feature) {
    this.store.push(item);
    this.dataSource.next(cloneDeep(this.store));
  }

  deleteItem(item: Feature) {
    const itemIndex = this.dataSource.value.indexOf(item);
    this.store.splice(itemIndex, 1);
    this.dataSource.next(cloneDeep(this.store));
  }

  updateItem(item: Feature) {
    const itemIndex = this.dataSource.value.indexOf(item);
    Object.assign(this.store[itemIndex], item);
    this.dataSource.next(cloneDeep(this.store));
  }
}
