import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Validators,
  ValidatorFn,
  AbstractControl,
  FormGroup,
  FormBuilder,
  FormControl
} from "@angular/forms";
import {AuthServiceService} from '../auth-service.service'
import {UtilityServiceService} from '../utility-service.service'
import {LoaderService} from '../loader.service'
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  passwordContent=false;
  registrationForm: FormGroup;
  browserTOKEN:any;
  device_type:any;
  registerrsp:any;
  password_type: string = 'password';
  passwordType: string = 'password';
  //userType:any;
  public userType =localStorage.getItem('user_type');

  constructor(private route: Router,private  formBuilder :FormBuilder, private authService: AuthServiceService,private utilityService:UtilityServiceService, private loaderService:LoaderService,public menuCtrl: MenuController) { }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

    async ngOnInit() {
      this.registrationForm = this.formBuilder.group({
        email: ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$') ])],
        password: ["",
        Validators.compose([Validators.required, Validators.minLength(6)])],
        re_password:new FormControl('', [Validators.required,this.equalto('password')]),
       
      first_name: [
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern('[a-zA-Z ]*')
          ])
        ],
        last_name: [
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern('[a-zA-Z ]*')
            // Validators.pattern(/^[a-zA-Z]{2,}$/)
          ])
        ],
        mobile_no: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],

      });
      this.browserTOKEN="asddfgghhnjj12344556677";
      this.device_type=localStorage.getItem('device_type');
     // this.userType=1;

  }
  showhidePassword(){
    // this.password_type = this.password_type === 'text' ? 'password' : 'text';
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
     
  
  }
  showhide(){
    // this.password_type = this.password_type === 'text' ? 'password' : 'text';
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
     
  
  }
  goToRegistrationpage() {
    this.route.navigate(['/login']);
  }
  goTologinpage(){
    this.route.navigateByUrl('/login');
  }
  popupPassword() {
    this.passwordContent = true;
  }

  closePopupPassword() {
    this.passwordContent = false;
  }
  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
    
    let input = control.value;
    
    let isValid=control.root.value[field_name]==input
    if(!isValid) 
    return { 'equalTo': {isValid} }
    else 
    return null;
    };
    }
  registration(){
    let registerData = this.registrationForm.value;
    registerData.device_token= this.browserTOKEN;
    registerData.device_type=localStorage.getItem('device_type');
   // registerData.user_type=this.userType;
    registerData.user_type=localStorage.getItem('user_type');
    console.log("111111",this.registrationForm.value);
    this.loaderService.presentLoading();
    this.authService.doregister(registerData).subscribe(
      response => {
        this.loaderService.dismiss();
      console.log(response);
      this.registerrsp=response;
      
      if (this.registerrsp.status==1) {
       // console.log(this.registerrsp.msg)
       localStorage.setItem("user_id", this.registerrsp.data);
        this.utilityService.presentToast(this.registerrsp.msg);
        this.route.navigateByUrl('/enterotp');

        
       } else {
        this.utilityService.presentToast(this.registerrsp.msg);
        
      }
    },
    error => {
      // this.loaderService.dismiss();
      console.log("internal error");
      this.utilityService.presentToast('Internal server error');
      
    }
  );
  }
}
