import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Validators,
  ValidatorFn,
  AbstractControl,
  FormGroup,
  FormBuilder
} from "@angular/forms";
import { UtilityServiceService } from '../utility-service.service';
import { AlertController } from 
'@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  type: string;
  result:any;
  rafflists=[];
  privateList=[];
  prvresult:any;
  raffle_id:any;
  passwordForm:FormGroup;
  name:any;
  //raffle_id:any;

  constructor(public authService:AuthServiceService,public router :Router,private activeroute:ActivatedRoute,private  formBuilder :FormBuilder,private utilityService:UtilityServiceService,private alertCtrl: AlertController, public alertController: AlertController) { }
  passwordContent=false;

  ngOnInit() {
    this.type = 'public';
    this.raffle_id =this.activeroute.snapshot.paramMap.get('id');
    console.log("ownerauctionid",this.raffle_id);
    this.passwordForm= this.formBuilder.group({
      
      raffle_pasword: ["",
      Validators.compose([Validators.required, Validators.minLength(6)])],

    });
    // this.callList(1);
    // this.callList(2);
  }
  
  ionViewWillEnter() {
    this.callList(1);
    this.callList(2);
    
}
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  

  callList(type_id){
    this.authService.List(type_id).subscribe((response :any) =>{
      console.log(response);
      this.prvresult=response;
      console.log("hjjjjjjjj",this.prvresult);
      this.raffle_id=this.prvresult.description;
      console.log("raffleID",this.raffle_id);
      
      if(response.status==1){
       // localStorage.setItem("raffle_id",response.data.raffle_id);
       this.raffle_id=response.data.description;
      console.log("raffleID",this.raffle_id);
        
       
        if(type_id===1){
          this.rafflists=response.data || [];
        

          

        }
        else{
          
         // this.privateList=response.data;
          this.privateList=response.data || [] ;
        }

      }
      else{

      }

    },
    error=>{
      console.log("internal server error")
    }
    )
  }

  openDetails(id){
    this.router.navigateByUrl('/detailspage/'+id);
    
  }
  popupPassword(id) {
    console.log("raffleiod",id)
    this.raffle_id=id;
    this.passwordContent = true;
  }

  closePopupPassword() {
    
    this.passwordContent = false;
  }
  submit(){
    let data = this.passwordForm.value;
    data.raffle_id=this.raffle_id;
    console.log("frgtpass",data);
    this.authService.chkraffle(data).subscribe((response :any) =>{
    
      console.log("frgtpass",response);
     // this.frgtResponse =response;

      if(response.status==1 ){
        this.router.navigateByUrl('/detailspage/'+this.raffle_id);

      }
      else{
        this.utilityService.presentToast(response.msg);

      }
    },
    // error =>{
    //   console.log("internal error")
    //   this.utilityService.presentToast('Internal server error');
    // }
    )
  }

  async presentAlert2(id) {
    console.log("raffleiod",id)
    this.raffle_id=id;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Enter Password',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Submit']
    });

    await alert.present();
  };
  async presentAlert(id) {
    console.log("raffleiod",id)
    this.raffle_id=id;
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
   await alert.present(); 
}

}
