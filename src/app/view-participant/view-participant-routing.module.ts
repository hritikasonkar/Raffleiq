import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewParticipantPage } from './view-participant.page';

const routes: Routes = [
  {
    path: '',
    component: ViewParticipantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewParticipantPageRoutingModule {}
