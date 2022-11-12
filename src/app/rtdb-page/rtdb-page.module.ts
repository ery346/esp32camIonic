import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtdbPagePageRoutingModule } from './rtdb-page-routing.module';

import { RtdbPagePage } from './rtdb-page.page';
import { UpdatedColorChangeDirective } from '../directives/updated-color-change.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtdbPagePageRoutingModule
  ],
  declarations: [RtdbPagePage,UpdatedColorChangeDirective]
})
export class RtdbPagePageModule {}
