import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { AccidentType, ACCIDENTS } from '../../../models/StaticTemp';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-accidentmanage',
  templateUrl: './accidentmanage.component.html',
  styleUrls: [
    './accidentmanage.component.css',
    '../dialog.css'
  ],
})
export class AccidentmanageComponent implements OnInit {

  displayedColumns: string[] = ['CarNumber', 'CarType', 'Date', 'FileName', 'IsWatched', 'IsFinished'];
  dataSource: MatTableDataSource<AccidentType>;
  finishedFiltering = true;
  watchedFiltering = false;

  constructor(
    public dialogRef: MatDialogRef<AccidentmanageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _router: Router,
    private datePipe: DatePipe,
  ) {
    if (data.CarNumber !== undefined) {
      const newAccident = {
        CarNumber: data.CarNumber,
        CarType: data.CarType,
        Date: this.datePipe.transform(new Date(), 'yyyy-MM-dd hh:mm'),
        FileName: 'alwa_20190208_080540_F.MP4',
        IsWatched: false,
        IsFinished: false,
      };
      ACCIDENTS.push(newAccident);
    }
    this.dataSource = new MatTableDataSource(ACCIDENTS);
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: AccidentType, filter: string) => {
      return !((data.IsWatched && this.watchedFiltering)
        || (data.IsFinished && this.finishedFiltering));
    };
    this.dataSource.filter = 'set';
  }
  CheckRowType(row: AccidentType) {
    if (row.IsFinished) {
      return 'finished_row';
    }
    if (row.IsWatched) {
      return 'watched_row';
    }
    return 'default_row';
  }
  ChangeFilter() {
    this.dataSource.filter = 'set';
  }
  changeWatched(accident: AccidentType) {
    accident.IsWatched = !accident.IsWatched;
    this.dataSource.filter = 'set';
  }
  changeFinished(accident: AccidentType) {
    accident.IsFinished = !accident.IsFinished;
    this.dataSource.filter = 'set';
  }
  playVideo(accident: AccidentType) {
    accident.IsFinished = !accident.IsFinished;
    this._router.navigate(['/carmovie/' + accident.FileName]);
    this.dataSource.filter = 'set';
  }

  close() {
    this.dialogRef.close();
  }
}
