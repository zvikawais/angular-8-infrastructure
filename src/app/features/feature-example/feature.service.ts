import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import cloneDeep from 'lodash/cloneDeep';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor() { }
  private store = [];
  private dataSource = new BehaviorSubject<{}[]>(cloneDeep(this.store));

  // Observable data streams
  dataSteam$ = this.dataSource.asObservable();

  pushItem(item: {}) {
    this.store.push(item);
    this.dataSource.next(cloneDeep(this.store));
  }

  deleteItem(item: {}) {
    const itemIndex = this.dataSource.value.indexOf(item);
    this.store.splice(itemIndex, 1);
    this.dataSource.next(cloneDeep(this.store));
  }

  updateItem(item: {}) {
    const itemIndex = this.dataSource.value.indexOf(item);
    Object.assign(this.store[itemIndex], item);
    this.dataSource.next(cloneDeep(this.store));
  }
}
