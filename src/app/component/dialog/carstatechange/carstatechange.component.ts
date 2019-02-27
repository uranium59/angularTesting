import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Car } from '../../../models/car';
import { CarService } from '../../../service/car.service';

@Component({
  selector: 'app-carstatechange',
  templateUrl: './carstatechange.component.html',
  styleUrls: ['./carstatechange.component.css'],
})
export class CarstatechangeComponent {
  cars: Car[];
  displayedColumns: string[] = ['CarId', 'CarNumber', 'CarType', 'Status'];

  constructor(
    public dialogRef: MatDialogRef<CarstatechangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _carService: CarService) { }

  ngAfterViewInit() {
    this.getCars();
  }
  getCars(): void {
    this._carService.getCars()
      .subscribe(cars => this.cars = cars);
  }
}
