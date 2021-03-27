import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfterSplashScreenPage } from './after-splash-screen.page';

const routes: Routes = [
  {
    path: '',
    component: AfterSplashScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfterSplashScreenPageRoutingModule {}
