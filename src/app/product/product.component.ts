import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit , OnChanges{


  @Input() name!: string;

  @Input() size!: number;

  @Input() stock!: number;

  @Input() tipo!: string;

  isDisabled: boolean = false;

  public color : string = 'orange';

  constructor() {
  }



  ngOnInit(): void {

    this.isDisabled = this.stock === 0;

  }

  decreaseStock(){
    this.stock--;

  }

  ngOnChanges(): void {

    if (this.stock === 0){
      this.color = 'red';
    }

  }


  verifyStock() {
    return this.stock === 0;
  }




}
