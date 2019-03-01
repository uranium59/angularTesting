import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Menu } from './types/Menu';
import {LoginCheckService} from '../../service/logincheck.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-leftsidemenu',
  templateUrl: './leftsidemenu.component.html',
  styleUrls: ['./leftsidemenu.component.css']
})
export class LeftsidemenuComponent implements OnInit {
  loginForm: FormGroup;
  menus: Menu[];

  @Output() toggleSide = new EventEmitter();

  constructor(private _config: LoginCheckService, private _toaster: ToastrService) { }

  ngOnInit() {

    this.menus = [
      {
        name: '차량관리',
        iconClass: 'fa fa-code menu-arrow',
        active: false,
        submenu: [
          { name: '차량목록조회', url: '/carlist' },
          { name: '차량시동금지', url: '/carstop' }
        ]
      },
      {
        name: '영상관리',
        iconClass: 'fa fa-code menu-arrow',
        active: false,
        submenu: [
          { name: '영상목록조회', url: '/movielist' }
        ]
      },
      {
        name: '테스트',
        iconClass: 'fa fa-code menu-arrow',
        active: false,
        submenu: [
          { name: '차량상태변경', url: '/carstate' }
        ]
      }
    ];

    this.loginForm = new FormGroup({
      userId: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
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

  loadForm(url: string) {

  }

  login() {
    if (this.loginForm.invalid) {
      this._toaster.warning('입력된 값이 잘못되었습니다', '입력오류');
      return;
    }
    localStorage.setItem(this._config.StorageNameOfApiToken, 'logged in');
  }
  logout() {
    localStorage.removeItem(this._config.StorageNameOfApiToken);
  }
}
