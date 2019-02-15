import { Component } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

}
