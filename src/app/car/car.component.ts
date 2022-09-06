import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {


  @Input() ID!:string;
  @Input() type!:string;

  @Input() color!:string;

  @Input() capacity!:number;

  @Input() createDate!:string;

  @Input() price!:number;

  @Input() isEnableButtonBuy!:boolean ;

  @Input() isHiddenText: boolean = true;

  @Input() moneyType!: string ;

  @Input() category!: string ;

  @Input() isHiddenID : boolean = true;

  @Input() btnName! : String ;



  constructor() { }

  ngOnInit(): void {

    if (this.category === 'rental') {


      this.btnName = 'Rent';
    } else {
      this.btnName = 'Buy';

    }
  }

  buyClick() {

    this.isEnableButtonBuy = true;


  }
}
