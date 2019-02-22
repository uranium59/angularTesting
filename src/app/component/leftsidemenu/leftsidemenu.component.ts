import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {Menu} from './types/Menu';

@Component({
  selector: 'app-leftsidemenu',
  templateUrl: './leftsidemenu.component.html',
  styleUrls: ['./leftsidemenu.component.css']
})
export class LeftsidemenuComponent implements OnInit {
  menus: Menu[];

  @Output() toggleSide = new EventEmitter();

  constructor() { }

  ngOnInit() {

    this.menus = [
      // {
      //     name: '차량관리',
      //     iconClass: 'fa fa-code',
      //     active: false,
      //     submenu: [
      //         { name: '차량목록조회', url: '/carList' }
      //     ]
      // },
      // {
      //     name: '영상관리',
      //     iconClass: 'fa fa-code',
      //     active: false,
      //     submenu: [
      //         { name: '영상목록조회', url: '/allMovieList' }
      //     ]
      // },
      // {
      //     name: '3번메뉴',
      //     iconClass: 'fa fa-code',
      //     active: false,
      //     submenu: [
      //         { name: '3-1메뉴', url: '#' }
      //     ]
      // },
      // {
      //     name: '4번메뉴',
      //     iconClass: 'fa fa-code',
      //     active: false,
      //     submenu: [
      //         { name: '4-1메뉴', url: '#' },
      //         { name: '4-2메뉴', url: '#' },
      //         { name: '4-3메뉴', url: '#' }
      //     ]
      // }
    ];
  }
  toggleSelf(): void {
    this.toggleSide.emit('toggle');
  }
  toggle(index: number) {
      if (!this) {
         this.menus.filter((menu, i) => i !== index && menu.active)
             .forEach(menu => menu.active = !menu.active);
      }

      this.menus[index].active = !this.menus[index].active;
  }

  loadForm(url: string){
    
  }
}
