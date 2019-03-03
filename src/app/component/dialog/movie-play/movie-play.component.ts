import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-movie-play',
  templateUrl: './movie-play.component.html',
  styleUrls: ['./movie-play.component.css']
})
export class MoviePlayComponent {
  url: string;
  constructor(
    public dialogRef: MatDialogRef<MoviePlayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    this.url = data.url;
  }
  close(){
    this.dialogRef.close();
  }
}
