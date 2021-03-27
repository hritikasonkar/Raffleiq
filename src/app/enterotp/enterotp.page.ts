import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import {AuthServiceService} from '../auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Validators,
  ValidatorFn,
  AbstractControl,
  FormGroup,
  FormBuilder,
  FormControl
} from "@angular/forms";
import {UtilityServiceService} from '../utility-service.service';
import {LoaderService} from '../loader.service';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-enterotp',
  templateUrl: './enterotp.page.html',
  styleUrls: ['./enterotp.page.scss'],
})
export class EnterotpPage implements OnInit {
 // public user_id =localStorage.getItem('user_id');
  user_id:any;
  otp1='';
  otp2='';
  otp3='';
  otp4='';
  otpres:any;
  resndres:any;
  numElements:any;
  user_type:any;
  

  constructor(private authService: AuthServiceService,private activeroute:ActivatedRoute, public menuCtrl: MenuController,private utilityService:UtilityServiceService,private loaderService:LoaderService,private route: Router,private _el: ElementRef) { }
  ionViewWillEnter() {
     this.menuCtrl.enable(false);
   }


  ngOnInit() {
    this.user_id=localStorage.getItem('user_id');
    console.log("IDhhhh",this.user_id)
    this.user_type=localStorage.getItem('user_type');
    console.log("type",this.user_type)
    
    
  }
 
  otp(){
    let data={
      user_id:this.user_id,
      otp:`${this.otp1}${this.otp2}${this.otp3}${this.otp4}`
      

    };
    this.loaderService.presentLoading();
    this.authService.otpVerification(data).subscribe(response =>{
      this.loaderService.dismiss();
      console.log("OTPVVV",response)
      this.otpres=response;
      if(this.otpres.status==1){
        this.utilityService.presentToast(this.otpres.msg);
       // this.route.navigate(['/homepage']);
       if(this.user_type==1){
        this.menuCtrl.enable(true);
        this.route.navigate(['/tabs/home']);

      }
      else{
        this.menuCtrl.enable(true);
        this.route.navigate(['/tabs/business-dashboard']);
      }


      }
      else{
        this.utilityService.presentToast(this.otpres.msg);

      }

    },
    error =>{
      console.log("internal error");
      this.utilityService.presentToast('Internal server error');
    }
    )
  }
  resend(){
    let data={
      user_id:this.user_id,

    }
    this.loaderService.presentLoading();
    this.authService.resendOtp(data).subscribe(response =>{
      this.loaderService.dismiss();
      console.log("resend",response);
      this.resndres=response;
      if(this.resndres.status==1){
        this.utilityService.presentToast(this.resndres.msg);
       

      }
      else{
        this.utilityService.presentToast(this.resndres.msg);

      }
    },
    error =>{
      console.log("internal error")
      this.utilityService.presentToast('Internal server error');
    }
    )
  }
  
 
  

  gotoNextField(nextElement) {
    nextElement.setFocus();
  }
 

}
