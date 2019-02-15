import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupBox } from './insidepopup/popup.component';
import { ReceivePopupBox} from './insidepopup/receivepopup.component';
import { InsidePopupComponent } from './insidepopup/insidepopup.component';
import { TestlistComponent } from './testlist/testlist.component';

@NgModule({
  declarations: [
    InsidePopupComponent,
    ReceivePopupBox,
    PopupBox,
    TestlistComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InsidePopupComponent
  ]
})
export class InsidepopupModule { }
