import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SafePipe } from '../pipes/safe.pipe';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { TimmerStringPipe } from '../pipes/timmer-string.pipe';
import { MenuSettingsPage } from './menu-settings/menu-settings.page';
import { ControlViewPage } from './control-view/control-view.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgxSliderModule,
  ],
  declarations: [HomePage,SafePipe,TimmerStringPipe, MenuSettingsPage, ControlViewPage]
})
export class HomePageModule {}
