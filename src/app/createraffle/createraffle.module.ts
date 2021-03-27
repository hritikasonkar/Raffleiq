import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaterafflePageRoutingModule } from './createraffle-routing.module';

import { CreaterafflePage } from './createraffle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreaterafflePageRoutingModule
  ],
  declarations: [CreaterafflePage]
})
export class CreaterafflePageModule {}
