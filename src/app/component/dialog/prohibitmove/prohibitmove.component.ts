import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Car } from '../../../models/car';
import { Observable} from 'rxjs';
import { CarService } from '../../../service/car.service';


@Component({
  selector: 'app-prohibitmove',
  templateUrl: './prohibitmove.component.html',
  styleUrls: ['./prohibitmove.component.css']
})
export class ProhibitmoveComponent implements OnInit {

  cars: Car[];
  displayedColumns: string[] = ['id', 'CarNumber', 'CarType', 'Status', 'ForbidMove'];

  constructor(
    public dialogRef: MatDialogRef<ProhibitmoveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _carService: CarService) {
  }

  ngOnInit() {
    this.getCars();
  }
  getCars(): void {
    this._carService.getCars()
      .subscribe(cars => this.cars = cars);
  }
  onChange(carid: number, event:any) {
    this.cars[carid].ForbidMove = event.checked;
    this._carService.updateCar(this.cars[carid])
      .subscribe();
  }
}
