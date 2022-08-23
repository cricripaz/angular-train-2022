import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shared3Pipe } from './shared3.pipe';
import { Shared2Directive } from './shared2.directive';
import { Shared1Component } from './shared1/shared1.component';



@NgModule({
  declarations: [
    Shared3Pipe,
    Shared2Directive,
    Shared1Component
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
