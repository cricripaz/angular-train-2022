import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  login : any = FormGroup

  constructor(private authService: AuthService,
              private router: Router,
              private fbLogin:FormBuilder) {
  }
  ngOnInit(): void {

    this.login = this.fbLogin.group({
      email:['',[Validators.required ,Validators.email]],
      pwd:['',Validators.required]

    })
  }

  onLogin( data : any) {
    console.log(data)
    this.authService.login({
      email: data.email ,
      password: data.pwd ,
      returnSecureToken: true
    }).subscribe(res => {
      console.log('RESPONSE: ', res)
      this.router.navigate(['home'])
    })
  }


  onCreate() {
    this.authService.createUser({
      email: 'test2@test.com',
      password: '123456',
      returnSecureToken: true
    }).subscribe(res => {
      console.log('CREATE USER: ', res)
    })
  }


    toRegisterView() {
        this.router.navigate(['register'])
    }
}
