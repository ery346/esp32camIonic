import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'menu-settings',
    loadChildren: () => import('./menu-settings/menu-settings.module').then( m => m.MenuSettingsPageModule)
  },
  {
    path: 'control-view',
    loadChildren: () => import('./control-view/control-view.module').then( m => m.ControlViewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
