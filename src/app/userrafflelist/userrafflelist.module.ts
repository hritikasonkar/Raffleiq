import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserrafflelistPageRoutingModule } from './userrafflelist-routing.module';

import { UserrafflelistPage } from './userrafflelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserrafflelistPageRoutingModule
  ],
  declarations: [UserrafflelistPage]
})
export class UserrafflelistPageModule {}
