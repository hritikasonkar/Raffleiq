import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewParticipantPageRoutingModule } from './view-participant-routing.module';

import { ViewParticipantPage } from './view-participant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewParticipantPageRoutingModule
  ],
  declarations: [ViewParticipantPage]
})
export class ViewParticipantPageModule {}
