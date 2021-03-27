import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyrafflePage } from './myraffle.page';

const routes: Routes = [
  {
    path: '',
    component: MyrafflePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyrafflePageRoutingModule {}
