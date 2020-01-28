import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EnvironmentType } from '../models/enums';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  log(msg: string) {
    if (environment.environmentType === EnvironmentType.Dev) {
      console.log(msg);
    }
  }

  constructor() { }
}
