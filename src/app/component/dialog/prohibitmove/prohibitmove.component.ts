import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { Car } from '../../../models/car';
import { CarService } from '../../../service/car.service';
import { SinglecarstopComponent } from '../singlecarstop/singlecarstop.component';

@Component({
  selector: 'app-prohibitmove',
  templateUrl: './prohibitmove.component.html',
  styleUrls: [
    './prohibitmove.component.css',
    '../dialog.css'
  ],
})
export class ProhibitmoveComponent implements OnInit {
  cars: Car[];
  dataSource: MatTableDataSource<Car>;
  displayedColumns: string[] = ['id', 'CarNumber', 'CarType', 'Status', 'ForbidMove'];

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ProhibitmoveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _carService: CarService) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.filterPredicate = (data: Car, filter: string) => {
      return !filter || data.CarNumber.indexOf(filter) > -1;
    }
    this.getCars();
  }
  getCars(): void {
    this._carService.getCars()
      .subscribe(cars => {
        this.cars = cars;
        this.dataSource.data = this.cars;
      });
  }
  onChange(car: Car, event: any) {
    console.log(car);
    setTimeout(() => {
      const dialogRef = this.dialog.open(SinglecarstopComponent, {
        width: '360px',
        data: car,
      });
      dialogRef.afterClosed().subscribe(result => {
      });
    });
  }
  close() {
    this.dialogRef.close();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
