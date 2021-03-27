import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserrafflelistPage } from './userrafflelist.page';

const routes: Routes = [
  {
    path: '',
    component: UserrafflelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserrafflelistPageRoutingModule {}
