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
        CarType: '두돈반',
        Latitude: 37.51,
        Longitude: 126.97,
        MovieUrl: 'alwa_20190208_080540_F.MP4',
        ReturnDate: new Date('2019-02-22')
      },
      {
        CarId: 1,
        CarType: '소나타',
        Latitude: 37.525,
        Longitude: 126.964,
        MovieUrl: 'alwa_20190208_080540_F.MP4',
        ReturnDate: new Date('2019-02-22')
      }
    ];
  }
}
