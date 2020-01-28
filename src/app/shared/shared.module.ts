import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './pipes/safe.pipe';



@NgModule({
  declarations: [
    // components
    // pipes
    SafePipe
    // directives
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
