import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Validators,
  ValidatorFn,
  AbstractControl,
  FormGroup,
  FormBuilder
} from "@angular/forms";
import {AuthServiceService} from '../auth-service.service';
import {UtilityServiceService} from '../utility-service.service';
import {LoaderService} from '../loader.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  forgetForm:FormGroup;
  token:any;
  device_type:any;
  loginResponse:any;
  frgtResponse:any;
  isLoading = false;
  user_type:any;
  password_type: string = 'password';
  passwordIcon: string = 'eye-off';

  constructor(private route: Router,private  formBuilder :FormBuilder, private authService:AuthServiceService,private utilityService:UtilityServiceService,private loaderService:LoaderService,public menuCtrl: MenuController,) { }

  passwordContent=false;

ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
  ngOnInit() {
    this.loginForm= this.formBuilder.group({
      email: ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$') ])],
      password: ["",
      Validators.compose([Validators.required, Validators.minLength(6)])],

    });
    this.token="sjjjkkkiuuuu3788";
    this.device_type=localStorage.getItem('device_type');
   console.log("Type",this.device_type);
   this.forgetForm = this.formBuilder.group({
    email: ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$') ])],

   })
    //this.type="A";
    this.user_type=localStorage.getItem('user_type');
    console.log("type",this.user_type)
  }
  goToRegistrationpage() {
    this.route.navigate(['/registration']);
  }
  popupPassword() {
    this.passwordContent = true;
  }

  closePopupPassword() {
    this.passwordContent = false;
  }
  showhidePassword(){
    // this.password_type = this.password_type === 'text' ? 'password' : 'text';
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
     
  
  }


  doLogin(){
    let logindata =this.loginForm.value;
    logindata.user_type=localStorage.getItem('user_type');
    logindata.device_token=this.token;
    logindata.device_type=localStorage.getItem('device_type');
    console.log("hhhh",this.loginForm.value)
    this.loaderService.presentLoading();
    this.authService.login(logindata).subscribe( async response =>{
      this.loaderService.dismiss();
      console.log("loginreaponse",response)
      this.loginResponse=response;
      if(this.loginResponse.status==1){
       
        this.utilityService.presentToast(this.loginResponse.msg);
        localStorage.setItem("user_id",this.loginResponse.data.user_id);
        this.authService.loginSignal.next('')
        
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
        this.utilityService.presentToast(this.loginResponse.msg);

      }
    },
    error =>{
      console.log("internal error")
      this.utilityService.presentToast('Internal server error');
    }
    )

  }
  frgtPass(){
    let forgotData = this.forgetForm.value;
    forgotData.user_type=localStorage.getItem('user_type');
    this.loaderService.presentLoading();
    this.authService.forgotpass(forgotData).subscribe(response =>{
      this.loaderService.dismiss();
      console.log("frgtpass",response);
      this.frgtResponse =response;

      if(this.frgtResponse.status==1 ){
        this.utilityService.presentToast(this.frgtResponse.msg);

      }
      else{
        this.utilityService.presentToast(this.frgtResponse.msg);

      }
    },
    error =>{
      console.log("internal error")
      this.utilityService.presentToast('Internal server error');
    }
    )
  }
}
