import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'hola ';

  products = [
    {nombre: "polera", talla: 13, stock: 1, tipo: "calor"},
    {nombre: "camisa", talla : 54, stock: 1, tipo: "frio"},
    {nombre: "jeans", talla : 78, stock: 0, tipo: "calor"},
    {nombre: "corto", talla : 90, stock: 1, tipo: "calor"},
    {nombre: "buso", talla : 56, stock: 0, tipo: "frio"},
    {nombre: "blusa", talla : 33, stock: 1, tipo: "frio"},
    {nombre: "chompa", talla : 10, stock: 1, tipo: "calor"},
    {nombre: "bozer", talla : 34, stock: 1, tipo: "frio"},
    {nombre: "blusa", talla : 5, stock: 1, tipo: "calor"},
    {nombre: "guantes", talla : 75, stock: 1, tipo: "calor"}
  ]




  _stockTotal : number =  this.products.map(item => item.stock).reduce((prev, curr) => prev + curr, 0);


  hotProducts : any = []
  coolProducts : any = []




  constructor( ) {

  }

  ngOnInit(){


    this.hotProducts = this.products.filter( p => p.tipo === 'calor' );
    this.coolProducts = this.products.filter( p => p.tipo === 'frio' );

  }



}
