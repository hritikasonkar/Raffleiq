import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { UtilityServiceService } from '../utility-service.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.page.html',
  styleUrls: ['./payment-list.page.scss'],
})
export class PaymentListPage implements OnInit {
  paymentId:any;
  paymentlst:any;
  array= [];
  acceptRsp:any;
  participantId:any;
  

  constructor(private authService:AuthServiceService,private utilityService:UtilityServiceService,private activeroute:ActivatedRoute) { }

  ngOnInit() {
    this.paymentId =this.activeroute.snapshot.paramMap.get('id');
    console.log("detailsid",this.paymentId);
    this.paymentList();
  }
  paymentList(){
   
    this.authService.listPayment(this.paymentId).subscribe(response =>{
      
      console.log("paymentlist",response);
      this.paymentlst =response;

      if(this.paymentlst.status==1 ){
        this.array=this.paymentlst.data;
        this.participantId=this.paymentlst.data.raffle_participant_id;
        console.log("ggghh",this.participantId)
        
        // this.utilityService.presentToast(this.listrsp.msg);

      }
      else{
        // this.utilityService.presentToast(this.listrsp.msg);

      }
    },
    error =>{
      console.log("internal error")
      // this.utilityService.presentToast('Internal server error');
    }
    )
  }
  approve(id){
    let data = {
      
      raffle_participant_id:id
    };
    this.authService.verify(data).subscribe(response => {
      this.acceptRsp = response;
      console.log("accept",response);
      this.paymentList();
     

    },
    );
  }

}
