import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },

   {
    path: '',
    redirectTo: 'after-splash-screen',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'after-splash-screen',
    loadChildren: () => import('./after-splash-screen/after-splash-screen.module').then( m => m.AfterSplashScreenPageModule)
  },
  {
    path: 'enterotp',
    loadChildren: () => import('./enterotp/enterotp.module').then( m => m.EnterotpPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'createraffle',
    loadChildren: () => import('./createraffle/createraffle.module').then( m => m.CreaterafflePageModule)
  },
  {
    path: 'detailspage/:id',
    loadChildren: () => import('./detailspage/detailspage.module').then( m => m.DetailspagePageModule)
  },
  
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'privacypolicy',
    loadChildren: () => import('./privacypolicy/privacypolicy.module').then( m => m.PrivacypolicyPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'payment/:id',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'view-participant/:id',
    loadChildren: () => import('./view-participant/view-participant.module').then( m => m.ViewParticipantPageModule)
  },
  {
    path: 'userrafflelist',
    loadChildren: () => import('./userrafflelist/userrafflelist.module').then( m => m.UserrafflelistPageModule)
  },
  {
    path: 'payment-history/:id',
    loadChildren: () => import('./payment-history/payment-history.module').then( m => m.PaymentHistoryPageModule)
  },
  {
    path: 'payment-list/:id',
    loadChildren: () => import('./payment-list/payment-list.module').then( m => m.PaymentListPageModule)
  },  {
    path: 'user-transaction',
    loadChildren: () => import('./user-transaction/user-transaction.module').then( m => m.UserTransactionPageModule)
  },




  // {
  //   path: 'business-dashboard',
  //   loadChildren: () => import('./business-dashboard/business-dashboard.module').then( m => m.BusinessDashboardPageModule)
  // }

  // {
  //   path: 'myticket',
  //   loadChildren: () => import('./myticket/myticket.module').then( m => m.MyticketPageModule)
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  // }

  // {
  //   path: 'myraffle',
  //   loadChildren: () => import('./myraffle/myraffle.module').then( m => m.MyrafflePageModule)
  // }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
