import { Component, OnInit } from '@angular/core';
import { TestClass } from './testclass';

@Component({
  selector: 'app-testlist',
  templateUrl: './testlist.component.html',
  styleUrls: ['./testlist.component.css']
})
export class TestlistComponent implements OnInit {
  tests: Test[] = [
    { num: 1, value: 'qwer' },
    { num: 2, value: 'asdf' },
    { num: 3, value: 'zxcv' }
  ];


  constructor() { }

  ngOnInit() {
  }

}
