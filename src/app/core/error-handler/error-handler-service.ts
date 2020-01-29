import {  ErrorHandler } from '@angular/core';


export class ErrorHandlerService implements ErrorHandler {
  handleError(error) {
    console.log('hey , the error is: ', error);
  }
}
