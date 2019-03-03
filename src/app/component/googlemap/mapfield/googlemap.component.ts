import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../../models/car';

import { CarService } from '../../../service/car.service';
import { LoginCheckService } from '../../../service/logincheck.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
  title: string = 'My first AGM project';
  @Input() lat: number = 37.52;
  @Input() lng: number = 126.96;
  zoom: number = 12;
  minzoom: number = 9;
  maxzoom: number = 17;

  cars: Car[];
  constructor(private _carService: CarService,
    private _config: LoginCheckService,
    private _toaster: ToastrService) {
  }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this._carService.getCars()
      .subscribe((cars) => {
        this.cars = cars;
        console.log('map car updated');
      });
  }
  getPosition(data) {
    this.lat = data.lat;
    this.lng = data.lng;
  }
}
