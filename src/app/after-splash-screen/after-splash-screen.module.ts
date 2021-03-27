import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfterSplashScreenPageRoutingModule } from './after-splash-screen-routing.module';

import { AfterSplashScreenPage } from './after-splash-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfterSplashScreenPageRoutingModule
  ],
  declarations: [AfterSplashScreenPage]
})
export class AfterSplashScreenPageModule {}
