import { Component, OnInit, OnDestroy } 
  from '@angular/core';
@Component({
  selector: 'popup-box',
  template: `
  <div>
    this is popup
  </div>
  `
})

export class PopupBox implements OnInit, OnDestroy{
  constructor(){
    console.log('constructing');
  }
  ngOnInit(): void{
    console.log('On Init');
  }
  ngOnDestroy(): void{
    console.log('On Destroy');
  }
}
