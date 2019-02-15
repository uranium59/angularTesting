import { Component, OnInit, OnDestroy, Input } 
  from '@angular/core';
@Component({
  selector: 'receive-popup-box',
  template: `
  <div>
    this is popup
    your input {{ testString }}
  </div>
  `
})

export class ReceivePopupBox implements OnInit, OnDestroy{
  @Input() testString: string;

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
