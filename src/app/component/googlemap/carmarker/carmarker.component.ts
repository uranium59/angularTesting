import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../../models/car';
import {CarGrid} from './cargridtile';

@Component({
  selector: 'app-carmarker',
  templateUrl: './carmarker.component.html',
  styleUrls: ['./carmarker.component.css']
})
export class CarmarkerComponent implements OnInit {
  holddisplay: boolean = false;
  displaying: boolean = false;

  car: Car;
  tiles: CarGrid[];

  @Input()
  set Car(car: Car){
    this.car = car;
    this.tiles=[
      {text: '차량종류', cols: 1, rows: 1, class: 'grid-left'},
      {text: car.CarType, cols: 1, rows: 1, class: 'grid-right'},
      {text: '차량상태', cols: 1, rows: 1, class: 'grid-left'},
      {text: car.Status, cols: 1, rows: 1, class: 'grid-right'},
    ];
  }

  constructor() {

  }

  ngOnInit() {
  }

  onMouseOver(infoWindow) {
    if(this.displaying){
      return;
    }
    this.displaying = true;
    infoWindow.open();
  }
  onMouseLeave(infoWindow){
    if(this.holddisplay){
      return;
    }
    this.displaying = false;
    infoWindow.close();
  }
  onMouseClick(){
    this.holddisplay = true;
  }
  closeInfoWindow(){
    this.holddisplay = false;
    this.displaying = false;
  }
}
