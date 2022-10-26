import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
// import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { ControlViewPageRoutingModule } from './control-view-routing.module';

import { ControlViewPage } from './control-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlViewPageRoutingModule,
    // NgxSliderModule
  ],
  // declarations: [ControlViewPage]
})
export class ControlViewPageModule {}
