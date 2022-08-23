import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';



@NgModule({
  declarations: [
    Product1Component,
    Product2Component
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
