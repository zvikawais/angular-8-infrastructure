import { Injectable } from '@angular/core';
import { StorageItem } from '../models/storage-item.model';

@Injectable({
  providedIn: 'root'
})
export class CachingService {

  constructor() { }

  isItemExists<T>(itemKey: string): boolean {
    if (!localStorage[itemKey]) {
      return false;
    }
    const cachedData = JSON.parse(localStorage[itemKey]) as StorageItem<T>;
    return new Date() > cachedData.ExpirationDate;
  }

  get<T>(itemKey: string): T | null {
    const cachedItem = JSON.parse(localStorage[itemKey]) as StorageItem<T>;
    return !!cachedItem ? cachedItem.Value : null;
  }

  set<T>(itemKey: string, value: T) {
    const expirationTime = new Date();
    expirationTime.setTime(expirationTime.getTime() + (1 * 60 * 60 * 1000)); // set expiration time for 1 hour
    const storageItem = { Key: itemKey, Value: value, ExpirationDate: expirationTime };
    localStorage[itemKey] = JSON.stringify(storageItem);
  }
}
