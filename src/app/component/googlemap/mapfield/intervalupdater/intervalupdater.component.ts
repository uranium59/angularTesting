import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../../../models/car';
import { interval } from 'rxjs';
import { CarService } from '../../../../service/car.service';
import { LOCATION } from './fakepositionlist';

@Component({
  selector: 'app-intervalupdater',
  templateUrl: './intervalupdater.component.html',
  styleUrls: ['./intervalupdater.component.css']
})
export class IntervalupdaterComponent implements OnInit {

  constructor(private _carService: CarService) { }

  cars: Car[];
  going3left = -1;
  going5left = -1;
  accident: any[]

  ngOnInit() {
    this.accident = LOCATION;
    this.getCars();
    const secondsCounter = interval(5000);
    secondsCounter.subscribe(() => {
      if (this.cars === undefined) {
        return;
      }
      this.cars.forEach((e, i) => {
        if (e.ForbidMove || e.Status === '사고') {
          return;
        }
        e.Latitude = this.accident[i].list[this.accident[i].count].lat;
        e.Longitude = this.accident[i].list[this.accident[i].count].lng;
        this.accident[i].count++;
        if (this.accident[i].count >= this.accident[i].list.length) {
          this.accident[i].count = 0;
        }
        this._carService.updateCar(e);
      });
    });
  }
  getCars(): void {
    this._carService.getCars()
      .subscribe(cars => {
        this.cars = cars;
      });
  }
}