import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { UtilityServiceService } from '../utility-service.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.page.html',
  styleUrls: ['./payment-history.page.scss'],
})
export class PaymentHistoryPage implements OnInit {
  list:any;
  listid:any;
  lists= [];

  constructor(private authService:AuthServiceService,private utilityService:UtilityServiceService,private activeroute:ActivatedRoute) { }

  ngOnInit() {
    this.listid =this.activeroute.snapshot.paramMap.get('id');
    console.log("detailsid",this.listid);
    this.transctionList();
  }
  transctionList(){
   
    this.authService.transctionDetails(this.listid).subscribe(response =>{
      
      console.log("list",response);
      this.list =response;

      if(this.list.status==1 ){
        this.lists=this.list.data;
      //  this.pastLists=this.pastlistrsp.data;
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

}
