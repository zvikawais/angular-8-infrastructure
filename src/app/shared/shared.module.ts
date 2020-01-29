import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './pipes/safe.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    // components
    // pipes
    SafePipe
    // directives
  ],
  exports: [
    CommonModule,
    RouterModule,
    SafePipe
  ]
})
export class SharedModule { }
