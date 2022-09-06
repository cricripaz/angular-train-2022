import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CarService} from "./car.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  implements OnInit {
  title = 'hola ';


 allCars :any=[];
    newCars : any = []
    usedCars: any = []
    auxKeys : any = []
    auxValues : any = []
    idHidden: boolean = true;



  constructor(private carService: CarService) {}
  ngOnInit() {

     this.carService.getAllCars().subscribe((res) => {

         this.allCars = res;

         this.auxKeys = Object.keys(res);
         this.auxValues = Object.values(res);

         Object.entries(this.allCars)
             .filter((c: any) => c[1].category === 'rental')
             //@ts-ignore
             .forEach((c)=>this.usedCars.push({id:c[0],...c[1]}));

         Object.entries(this.allCars)
             .filter((c: any) => c[1].category === 'sale')
            //@ts-ignore
            .forEach((c) => this.newCars.push({id:c[0],...c[1]}));


         console.log(this.newCars)



    });



  }




    hiddenId() {

    }
}
