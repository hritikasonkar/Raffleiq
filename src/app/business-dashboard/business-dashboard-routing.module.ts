import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessDashboardPage } from './business-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessDashboardPageRoutingModule {}
