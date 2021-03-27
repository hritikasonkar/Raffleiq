import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-after-splash-screen',
  templateUrl: './after-splash-screen.page.html',
  styleUrls: ['./after-splash-screen.page.scss'],
})
export class AfterSplashScreenPage implements OnInit {
  

  constructor(private route: Router,public menuCtrl: MenuController) { }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
    console.log("enter")
    let user_id= localStorage.getItem('user_id');
    let user_type=localStorage.getItem('user_type');
    if(user_id){
      if(user_type=='1'){
        this.menuCtrl.enable(true);
        this.route.navigate(['/tabs/home']);
  
      }
      else{
        this.menuCtrl.enable(true);
        
        this.route.navigate(['/tabs/business-dashboard']);
      }
  
    }
   }

  ngOnInit() {
    console.log("init")

 
  }
  loginpage() {
    this.route.navigate(['/login']);
  }
  player(){
    this.route.navigateByUrl('/login'); 
    localStorage.setItem("user_type", '1');

  }
  business(){
    this.route.navigateByUrl('/login'); 
    localStorage.setItem("user_type", '2');

  }
  
}
