import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../../models/car';

@Component({
  selector: 'app-carmarker',
  templateUrl: './carmarker.component.html',
  styleUrls: ['./carmarker.component.css']
})
export class CarmarkerComponent implements OnInit {
  holddisplay: boolean = false;
  displaying: boolean = false;

  longitude: number;
  latitude: number;
  carId: number;
  carType: string;
  movieUrl: string;

  @Input()
  set Car(car: Car){
    this.longitude = car.Longitude;
    this.latitude = car.Latitude;
    this.carId = car.CarId;
    this.carType = car.CarType;
    this.movieUrl = car.MovieUrl;
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
