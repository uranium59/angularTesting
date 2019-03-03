import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Car } from '../../../models/car';
import { CarService } from '../../../service/car.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-carstatechange',
  templateUrl: './carstatechange.component.html',
  styleUrls: [
    './carstatechange.component.css',
    '../dialog.css'
  ],
})
export class CarstatechangeComponent implements OnInit {
  cars: Car[];
  dataSource: MatTableDataSource<Car>;
  displayedColumns: string[] = ['id', 'CarNumber', 'CarType', 'Status'];

  constructor(
    public dialogRef: MatDialogRef<CarstatechangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _carService: CarService,
    private _toaster: ToastrService,
    private _router: Router) {
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
  checkDisable(element:any, status:any){
    console.log(element, status);
    return true;
  }
  onChange(id: number, event: any) {
    console.log(event);
    const car = this.cars[id]
    car.Status = event._value;
    this._carService.updateCar(car)
      .subscribe();
    if (event._value === '사고') {
      const toastr = this._toaster.error(`
      사고가 발생한 차량이 확인되었습니다
      `, '사고발생', {
          timeOut: 0,
          disableTimeOut: true,
          enableHtml: true,
        });
      toastr.onTap.subscribe(() => {
        this._router.navigate(['/accidents/' + car.CarNumber + '/' + car.CarType]);
      });
    }
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  close(){
    this.dialogRef.close();
  }
}
