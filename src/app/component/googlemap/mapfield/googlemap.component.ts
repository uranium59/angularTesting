import { Component } from '@angular/core';
import { Car } from '../../../models/car';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent {
  title: string = 'My first AGM project';
  lat: number = 37.52;
  lng: number = 126.96;
  zoom: number = 12;
  minzoom: number = 9;
  maxzoom: number = 17;

  cars: Car[];
  constructor(){
    this.cars = [
      {
        CarId: 0,
        CarType: '레티나',
        Latitude: 37.51,
        Longitude: 126.97,
        Status: '주행중',
        Heading: 180,
        CarNumber: '12가3456'
      },
      {
        CarId: 1,
        CarType: '소나타',
        Latitude: 37.525,
        Longitude: 126.964,
        Status: '주행중',
        Heading: 90,
        CarNumber: '12나3456'
      }
    ];
  }
}
