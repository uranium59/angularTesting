import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Car } from '../../../models/car';
import { CarService } from '../../../service/car.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carstatechange',
  templateUrl: './carstatechange.component.html',
  styleUrls: ['./carstatechange.component.css'],
})
export class CarstatechangeComponent implements OnInit {
  cars: Car[];
  displayedColumns: string[] = ['id', 'CarNumber', 'CarType', 'Status'];

  constructor(
    public dialogRef: MatDialogRef<CarstatechangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _carService: CarService,
    private _toaster: ToastrService,
    private _router: Router) {
  }

  ngOnInit() {
    this.getCars();
  }
  getCars(): void {
    this._carService.getCars()
      .subscribe(cars => this.cars = cars);
  }
  onChange(car: number, event: any) {
    this.cars[car].Status = event.value;
    this._carService.updateCar(this.cars[car])
      .subscribe();
    if (event.value === '사고') {
      const toastr = this._toaster.error(`
      고장이 발생한 차량이 확인되었습니다
      영상 재생하기`, '고장발생', {
          timeOut: 0,
          disableTimeOut: true,
          enableHtml: true,
        });
      toastr.onTap.subscribe(() => {
        this._router.navigate(['/carmovie/alwa_20190208_080540_F.MP4']);
      });
    }
  }
}
