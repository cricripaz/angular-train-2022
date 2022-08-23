import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client1Component } from './client1/client1.component';
import { Client2Component } from './client2/client2.component';



@NgModule({
  declarations: [
    Client1Component,
    Client2Component
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
