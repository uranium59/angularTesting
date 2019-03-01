import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../../../models/car';
import { interval } from 'rxjs';
import { CarService } from '../../../../service/car.service';

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

  ngOnInit() {
    this.getCars();
    const secondsCounter = interval(5000);
    secondsCounter.subscribe(() => {
      if (this.cars === undefined) {
        return;
      }
      if (!this.cars[3].ForbidMove) {
        this.cars[3].Longitude += 0.001 * this.going3left;
      }
      if (this.cars[3].Longitude < 126.90) {
        this.going3left = 1;
      } else if (this.cars[3].Longitude > 126.99) {
        this.going3left = -1;
      }
      this._carService.updateCar(this.cars[3]);

      if (!this.cars[5].ForbidMove) {
        this.cars[5].Longitude += 0.001 * this.going5left;
      }
      if (this.cars[5].Longitude < 126.93) {
        this.going5left = 1;
      } else if (this.cars[5].Longitude > 127.03) {
        this.going5left = -1;
      }
      this._carService.updateCar(this.cars[5]);
    });
  }
  getCars(): void {
    this._carService.getCars()
      .subscribe(cars => {
        this.cars = cars;
      });
  }
}
