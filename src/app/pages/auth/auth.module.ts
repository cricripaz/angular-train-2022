import { NgModule } from '@angular/core';
import {AuthComponent} from "./auth.component";
import {Route, RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Route[] = [
  {
    path: '',
    component: AuthComponent
  }
]

@NgModule({
  declarations: [
    AuthComponent
  ],
    imports: [
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ]
})
export class AuthModule { }