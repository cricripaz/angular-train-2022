import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url : string = environment.app.apiUrlBase;


  constructor(private http : HttpClient) { }

  public getAllCars(): Observable<any> {
      return this.http.get(`${this.url}/cars.json`);
  }
}
