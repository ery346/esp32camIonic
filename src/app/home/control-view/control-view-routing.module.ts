import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlViewPage } from './control-view.page';

const routes: Routes = [
  {
    path: '',
    component: ControlViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlViewPageRoutingModule {}
