import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheType } from '../models/enums';
import { environment } from '../../environments/environment';
import { CachingService } from './caching.service';

@Injectable({
  providedIn: 'root'
})

export class BugService {

  // Base url
  private readonly baseurl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private cachingService: CachingService) { }



  // POST
  executePost<T>(url: string, data: {}): Observable<T> {
    return this.http.post<T>(this.baseurl + url, JSON.stringify(data));
  }

  // GET
  executeGet<T>(url: string, cacheOptions = { useCache: true, cacheType: CacheType.localStorage }): Observable<T> {
    if (cacheOptions.useCache && this.cachingService.isItemExists(url)) {
      return of(this.cachingService.get(url));
    }
    return this.http.get<T>(this.baseurl + url).pipe(
      tap(x => {
        if (cacheOptions.useCache) {
          this.cachingService.set(url, x);
        }
      })
    );
  }

  // PUT
  executeUpdate<T>(url: string, data: {}): Observable<T> {
    return this.http.put<T>(this.baseurl + url, JSON.stringify(data));
  }

  // DELETE
  executeDelete<T>(url: string) {
    return this.http.delete<T>(this.baseurl + url);
  }
}
