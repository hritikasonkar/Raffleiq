import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthServiceService } from './auth-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public appPages:any;
  public selectedIndex = 0;
  user_type:any;
  menu(){
    this.user_type=localStorage.getItem('user_type');
    console.log("type",this.user_type)
    if(this.user_type==1){
      this.appPages = [
        {
          title: 'My Ticket',
          url: '/tabs/myticket',
        },  
        
        {
          title: 'About us',
          url: '/aboutus',
        },
        {
          title: 'Privacy Policy',
          url: '/privacypolicy',
        },
        {
          title: 'Transaction History',
          url: '/user-transaction',
        }, 
        {
          title: 'Logout',
            url: '/',
          logout:true,
          
          
         
        }
      ];

    }
    else if(this.user_type==2){
      this.appPages = [
        {
          title: 'My Raffle',
          url: '/tabs/myraffle',
        },
       
        {
          title: 'Change Password',
           url: '/change-password',
        },
        {
          title: 'About us',
          url: '/aboutus',
        },
        {
          title: 'Privacy Policy',
          url: '/privacypolicy',
        },
       
        {
          title: 'Logout',
            url: '/',
          logout:true,
          
          
         
        }
      ];


    }
   

  }
 
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  loginSubscription:Subscription;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private authService:AuthServiceService,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    let tempPlatform = this.platform;
    let deviceType : string;
    if(tempPlatform.is('android'))
{
deviceType = 'A';
}
else
{
deviceType = 'I';
}
localStorage.setItem('device_type',deviceType);
  }

  initializeApp() {
    this.menu();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
       this.statusBar.backgroundColorByHexString('#5b3deb');

    });
    
    this.loginSubscription=this.authService.loginSignal.subscribe(()=>{
      console.log('menusignall')
      this.menu();
      
    })
  }

  ngOnInit() {
    this.menu();
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    
  }
  onMenuClick(i,menu){
    console.log("menu",menu)
    this.selectedIndex = i;
    if(menu.logout){
      this.logout();
    }

  }
  
  logout(){
    localStorage.removeItem("user_id");
    console.log('logout');

  }
  
}
