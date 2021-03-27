import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'myticket',
        loadChildren: () => import('../myticket/myticket.module').then( m => m.MyticketPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'myraffle',
        loadChildren: () => import('../myraffle/myraffle.module').then( m => m.MyrafflePageModule)
      },
      {
        path: 'createraffle',
        loadChildren: () => import('../createraffle/createraffle.module').then( m => m.CreaterafflePageModule)
      },
      {
        path: 'business-dashboard',
        loadChildren: () => import('../business-dashboard/business-dashboard.module').then( m => m.BusinessDashboardPageModule)
      },
      {
        path: '',
        // redirectTo: '/tabs/home',
       // redirectTo: '/homepage',
        pathMatch: 'full'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
