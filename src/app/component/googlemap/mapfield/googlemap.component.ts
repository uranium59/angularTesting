import { Component, OnInit } from '@angular/core';
import { Car } from '../../../models/car';

import { CarService } from '../../../service/car.service';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 37.52;
  lng: number = 126.96;
  zoom: number = 12;
  minzoom: number = 9;
  maxzoom: number = 17;

  cars: Car[];
  constructor(private _carService: CarService) {
  }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {

    this._carService.getCars()
      .subscribe(cars => this.cars = cars);
  }
}
