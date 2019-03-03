import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-project';

  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  sideNavManage(argument: string) {
    console.log(argument);
    if (argument === 'open' && this.sidenav.opened) {
      return;
    }
    this.sidenav.toggle();
  }
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
