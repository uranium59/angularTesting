import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Car } from '../../../models/car';
import { CarService } from '../../../service/car.service';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent {
  cars: Car[];
  displayedColumns: string[] = [
    'CarId', 'CarNumber', 'CarType', 'Latitude', 'Longitude', 'Status', 'ForbidMove'
  ];

  constructor(
    public dialogRef: MatDialogRef<CarInfoComponent>,
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
