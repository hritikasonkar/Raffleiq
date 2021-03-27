import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { UtilityServiceService } from '../utility-service.service';

@Component({
  selector: 'app-myticket',
  templateUrl: './myticket.page.html',
  styleUrls: ['./myticket.page.scss'],
})
export class MyticketPage implements OnInit {
  items= [];
  lists=[];
  upcomingrsp:any;
  pastrsp:any;

  constructor(private authService:AuthServiceService,private utilityService:UtilityServiceService,public router :Router,) { }

  ngOnInit() {
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  ionViewWillEnter() {
     this.userupComingList();
     this.pastList();
    
}
  userupComingList(){
   
    this.authService.userupcoming().subscribe(response =>{
      
      console.log("userupcominglist",response);
     this.upcomingrsp =response;

      if(this.upcomingrsp.status==1 ){
        this.items=this.upcomingrsp.data;
       

      }
      else{
       //  this.utilityService.presentToast(this.upcomingrsp.msg);

      }
    },
    error =>{
      console.log("internal error")
      
    }
    )
  }
  pastList(){
   
    this.authService.userpast().subscribe(response =>{
      
      console.log("pastlist",response);
     this.pastrsp =response;

      if(this.pastrsp.status==1 ){
        this.lists=this.pastrsp.data;
        // this.utilityService.presentToast(this.pastrsp.msg);

      }
      else{
      

      }
    },
    error =>{
      console.log("internal error")
      // this.utilityService.presentToast('Internal server error');
    }
    )
  }

}
