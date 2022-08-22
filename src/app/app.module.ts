import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { PipeTestPipe } from './pipe-test.pipe';
import { ExpoPipe } from './expo.pipe';
import { SizesPipe } from './sizes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PipeTestPipe,
    ExpoPipe,
    SizesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
