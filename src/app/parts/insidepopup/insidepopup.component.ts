import { Component, OnInit } 
  from '@angular/core';


@Component({
  selector: 'app-insidepopup',
  templateUrl: './insidepopup.component.html',
  styleUrls: ['./insidepopup.component.css']
})
export class InsidePopupComponent implements OnInit {
  display:boolean;
  values = '';

  constructor() {
    this.display = true;
  }

  ngOnInit() {
  }

  toggle(): void{
    this.display = !this.display;
  }

  onKey(event: any){
    this.values = event.target.value;
  }

}
