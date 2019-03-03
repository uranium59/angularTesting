import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Car } from '../../../models/car';
import { SinglecarstopComponent } from '../../dialog/singlecarstop/singlecarstop.component';

@Component({
  selector: 'app-carmarker',
  templateUrl: './carmarker.component.html',
  styleUrls: ['./carmarker.component.css']
})
export class CarmarkerComponent implements OnInit {
  static _colorMap = new Map([
    ['주행중', 'green'],
    ['주차', 'blue'],
    ['사고', 'red']
  ]);
  holddisplay: boolean = true;
  displaying: boolean = true;

  // car: Car;
  carColor: string;
  arrowImage: string;
  lockImage: string;
  car: Car;

  @Input() set Car(Car: Car) {
    this.car = Car;
    this.carColor = CarmarkerComponent._colorMap.get(Car.Status);
  }

  @Output() onClicked: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialog: MatDialog,
  ) {

  }

  ngOnInit() {
    this.lockImage = 'assets/lock.png';
  }

  onMouseOver(infoWindow) {
  }
  onMouseLeave(infoWindow) {
  }
  onMouseClick() {
    this.onClicked.emit({ lat: this.car.Latitude, lng: this.car.Longitude });
    setTimeout(() => {
        const dialogRef = this.dialog.open(SinglecarstopComponent, {
            width: '360px',
            data: this.car,
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    });
  }
  closeInfoWindow() {
  }
}
