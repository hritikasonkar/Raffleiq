import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessDashboardPageRoutingModule } from './business-dashboard-routing.module';

import { BusinessDashboardPage } from './business-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessDashboardPageRoutingModule
  ],
  declarations: [BusinessDashboardPage]
})
export class BusinessDashboardPageModule {}
