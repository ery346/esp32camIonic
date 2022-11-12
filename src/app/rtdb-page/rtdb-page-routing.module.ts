import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtdbPagePage } from './rtdb-page.page';

const routes: Routes = [
  {
    path: '',
    component: RtdbPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtdbPagePageRoutingModule {}
