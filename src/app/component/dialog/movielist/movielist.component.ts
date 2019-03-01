import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  accidents: any[] = [
    {
      CarNumber: '12가3456',
      CarType: '레티나',
      Date: '2019-02-27 17:30',
      FileName: 'alwa_20190208_080540_F.MP4'
    },
    {
      CarNumber: '12나3456',
      CarType: '소나타',
      Date: '2019-02-28 15:00',
      FileName: 'alwa_20190208_080540_F.MP4'
    },
    {
      CarNumber: '33다3456',
      CarType: 'SM5',
      Date: '2019-03-01 16:00',
      FileName: 'alwa_20190208_080540_F.MP4'
    }
  ];
  displayedColumns: string[] = ['CarNumber', 'CarType', 'Date', 'FileName'];

  constructor(
    private _router: Router) { }

  ngOnInit() {
  }

  showmovie(row:any){
    this._router.navigate(['/carmovie/' + row.FileName]);
  }
}
