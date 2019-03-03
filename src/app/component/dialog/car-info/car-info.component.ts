import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Car } from '../../../models/car';
import { CarService } from '../../../service/car.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: [
    './car-info.component.css',
    '../dialog.css'
  ],
})
export class CarInfoComponent implements OnInit {
  cars: Car[];
  dataSource: MatTableDataSource<Car>;
  displayedColumns: string[] = [
    'id', 'CarNumber', 'CarType', 'Latitude', 'Longitude', 'Status', 'ForbidMove'
  ];

  constructor(
    public dialogRef: MatDialogRef<CarInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _carService: CarService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.filterPredicate = (data: Car, filter: string) => {
      return !filter || data.CarNumber.indexOf(filter) > -1;
    };
    this.getCars();
  }
  getCars(): void {
    this._carService.getCars()
      .subscribe(cars => {
        this.cars = cars;
        this.dataSource.data = this.cars;
      });
  }
  close() {
    this.dialogRef.close();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
