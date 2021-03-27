import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthServiceService} from '../auth-service.service';
import { LoaderService } from '../loader.service';
import { UtilityServiceService } from '../utility-service.service';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.page.html',
  styleUrls: ['./detailspage.page.scss'],
})
export class DetailspagePage implements OnInit {
  detailsid:any;
  id:any;
  detailsrsp:any;
  lists = [];
  name:any;
  noEntry:any;
  fees:any;
  start_date:any;
  image:any;
  description:any;
  join_staus:any;
  user_id:any;
  joinRes:any;
  raffle_id:any;
  

  constructor(private activeroute:ActivatedRoute,public authService:AuthServiceService,private utilityService:UtilityServiceService, private loaderService:LoaderService,public router :Router,) { }

  ngOnInit() {
    this.detailsid =this.activeroute.snapshot.paramMap.get('id');
    console.log("detailsid",this.detailsid);
    this.user_id=localStorage.getItem('user_id');
    this.details();
  }
  
  details(){  
    // this.loaderService.presentLoading();
    this.authService.detailsPage(this.detailsid).subscribe(response => {
      this.detailsrsp = response;
      console.log("rspp",response);
      
      if(this.detailsrsp.status==1){
        this.name=this.detailsrsp.data.name;
        this.noEntry=this.detailsrsp.data.no_of_entries;
        this.fees=this.detailsrsp.data.fees;
        this.start_date=this.detailsrsp.data.start_date;
        this.image=this.detailsrsp.data.image;
        this.description=this.detailsrsp.data.description;
        this.join_staus=this.detailsrsp.data.join_staus;
        this.raffle_id=this.detailsrsp.data.raffle_id;
        console.log("gggg",this.name)
      }
      else {
        // this.loaderService.dismiss();
        // this.utilityService.presentToast(this.listresponse.msg);
      }

    },
    error => {
      console.log("internal error");
      // this.utilityService.presentToast('Internal server error');
    }
    );
  }
  
  join(id){
    let data = {
      raffle_id:this.detailsid ,
      user_id:this.user_id
    };
    this.loaderService.presentLoading();
    this.authService.joinPublic(data).subscribe(response => {
      this.loaderService.dismiss();
      console.log("response",response);
       this.joinRes = response;
      this.details();
      if(this.joinRes.status==1){
       
       // this.utilityService.presentToast(this.joinRes.msg);
       this.router.navigateByUrl('/payment/'+this.detailsid);
        
      }
      else {
          this.utilityService.presentToast(this.joinRes.msg);
      }

    },
    error => {
     
       this.utilityService.presentToast('Internal server error');
    }
    );
  }

}
