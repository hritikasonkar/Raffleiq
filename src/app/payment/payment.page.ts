import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Stripe } from '@ionic-native/stripe/ngx';
import { AuthServiceService } from '../auth-service.service';
import { LoaderService } from '../loader.service';
import { UtilityServiceService } from '../utility-service.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  private selectedLink: string="card"; 
  setradio(e: string): void   
  {  
  
    this.selectedLink = e;  
          
  } 
  isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) {  
            return false;  
  }  
  
        return (this.selectedLink === name);  
    } 
  stripeForm: FormGroup;
  card:any;
  stripe_key:'pk_test_R1dALSLgt4yc3tlnmbvWrydg00ZQIZ6Qfb';
  user_id:any;
  raffleId:any;
  detailsrsp:any;
  detailsid:any;
  fees:any;
  paymentrsp:any;
  stripe_token:any;
  cashpaymentrsp:any;
  

  constructor(private  formBuilder :FormBuilder,private stripe: Stripe,private activeroute:ActivatedRoute,private authService:AuthServiceService,private utilityService:UtilityServiceService,private loaderService:LoaderService,private route: Router,) { }

  ngOnInit() {
    this.stripeForm= this.formBuilder.group({
      CardNumber: ['', Validators.compose([Validators.required,Validators.minLength(16)])],
      ExpMonth: ['', Validators.compose([Validators.required,Validators.minLength(2)])],
      Expyear:['', Validators.compose([Validators.required,Validators.minLength(4)])],
      cvv: ['', Validators.compose([Validators.required,Validators.minLength(3)])],


    });
    this.user_id=localStorage.getItem('user_id');
    console.log("userid",this.user_id);
    this.raffleId =this.activeroute.snapshot.paramMap.get('id');
    console.log("detailsid",this.raffleId);
    this.details();
   // this.payWithStripe();
    this.stripe_token=localStorage.getItem('stripe_token');
    console.log("stripe_token",this.stripe_token)
  }
  payWithStripe() {
    this.stripe.setPublishableKey('pk_test_R1dALSLgt4yc3tlnmbvWrydg00ZQIZ6Qfb');

    this.card = {
      number: this.stripeForm.value.CardNumber,
      expMonth: this.stripeForm.value.ExpMonth,
      expYear: this.stripeForm.value.Expyear,
     cvc: this.stripeForm.value.cvv
     };
      console.log(this.card)
      this.loaderService.presentLoading();

      this.stripe.createCardToken(this.card)
       .then(token => {
         console.log("Strip token: ",token.id);
         localStorage.setItem('stripe_token',token.id)
         //////
         let data = {
          raffle_id:this.raffleId ,
          user_id:this.user_id,
          stripe_token:token.id,
          amount:this.fees
        };
        // this.loaderService.presentLoading();
        this.authService.payment(data).subscribe(response => {
          // this.loaderService.dismiss();
    
          console.log("paymentresponse",response);
           this.paymentrsp = response;
          
          if(this.paymentrsp.status==1){
            this.utilityService.presentToast(this.paymentrsp.msg);
            this.route.navigate(['/tabs/home']);
           
        
            
          }
          else {
              this.utilityService.presentToast(this.paymentrsp.msg);

          }
          //  this.loaderService.dismiss();

    
        },
        error => {
          // this.loaderService.dismiss();

         
           this.utilityService.presentToast('Internal server error');
        }
        );

        }).catch(error => {
          console.error("error: ", error);
          this.utilityService.presentToast('Your card number is incorrect');
          

        });
       
  }
  details(){  
   
    this.authService.detailsPage(this.raffleId).subscribe(response => {
      this.detailsrsp = response;
      console.log("rspp",response);
      
      if(this.detailsrsp.status==1){
        this.fees=this.detailsrsp.data.fees;
        console.log("gggg",this.fees)
      }
      else {
        
      }

    },
    error => {
      console.log("internal error");
       this.utilityService.presentToast('Internal server error');
    }
    );
  }
  payCash(){
    let data = {
      raffle_id:this.raffleId ,
      user_id:this.user_id,
      stripe_token:this.user_id,
      amount:this.fees
    };
    this.loaderService.presentLoading();
    this.authService.cashpayment(data).subscribe(response => {
      this.loaderService.dismiss();
    
      console.log("cashpaymentresponse",response);
      this.cashpaymentrsp = response;
      if(this.cashpaymentrsp.status==1){
        this.utilityService.presentToast(this.cashpaymentrsp.msg);
        this.route.navigate(['/tabs/home']);
       
    
        
      }
      else {
          this.utilityService.presentToast(this.cashpaymentrsp.msg);
        
      }
     

    },
    error => {
     
      
    }
    );
  }

}
