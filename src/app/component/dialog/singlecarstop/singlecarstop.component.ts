import { Component, Input, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Car } from '../../../models/car';
import { CarService } from '../../../service/car.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-singlecarstop',
  templateUrl: './singlecarstop.component.html',
  styleUrls: [
    './singlecarstop.component.css',
    '../dialog.css'
  ],
})
export class SinglecarstopComponent {
  car: Car;
  passwordForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SinglecarstopComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _carService: CarService,
    private _toaster: ToastrService
  ) {
    this.car = data;
    this.passwordForm = new FormGroup({
      password: new FormControl('', Validators.required)
    });
  }

  changeState() {
    if(this.passwordForm.controls['password'].value !== '12345'){
      this._toaster.warning('비밀번호가 잘못 입력되었습니다', '입력오류');
      return;
    }
    this.car.ForbidMove = !this.car.ForbidMove;
    this.dialogRef.close();
    this._carService.updateCar(this.car).subscribe();
  }
  close(){
    this.dialogRef.close();
  }
}
