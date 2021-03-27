import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyrafflePageRoutingModule } from './myraffle-routing.module';

import { MyrafflePage } from './myraffle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyrafflePageRoutingModule
  ],
  declarations: [MyrafflePage]
})
export class MyrafflePageModule {}
