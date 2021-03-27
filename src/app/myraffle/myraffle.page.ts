import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthServiceService} from '../auth-service.service';
import {UtilityServiceService} from '../utility-service.service';

@Component({
  selector: 'app-myraffle',
  templateUrl: './myraffle.page.html',
  styleUrls: ['./myraffle.page.scss'],
})
export class MyrafflePage implements OnInit {
  listrsp:any;
  items= [];
  pastLists=[];
  pastlistrsp:any;
  type: string;
  user_id:any;
  hideMe=false;
  hideme=[]
  itemId = "";








  

  constructor(private authService:AuthServiceService,private utilityService:UtilityServiceService,public router :Router,) { }

  ngOnInit() {
    this.type = 'upcomingRaffle';
    this.user_id=localStorage.getItem('user_id');
    // this.upComingList();
    // this.pastList();
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  hide(i, id) {
    console.log(i);
    console.log(id);
    this.itemId = i+1;
    if (this.hideMe == false) {
      this.hideMe = true;
    } else {
      this.hideMe = false;
    }
    // console.log(i+1);
    // console.log(id);
    // // this.hideMe = i+1;
    // if (i+1 == id) {
    //   this.hideMe == true;
    //   console.log('true')
    // } else {
    //   this.hideMe == false;
    //   console.log('false')
    // }
    // for(let i=0; i<this.items.length; i++) {
    //   if(this.items[i].raffle_id == )
    // }
  }
  ionViewWillEnter() {
    this.upComingList();
    this.pastList();
    
}



  upComingList(){
   
    this.authService.upcoming().subscribe(response =>{
      
      console.log("upcominglist",response);
      this.listrsp =response;

      if(this.listrsp.status==1 ){
        this.items=this.listrsp.data;
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
  pastList(){
   
    this.authService.past().subscribe(response =>{
      
      console.log("pastlist",response);
      this.pastlistrsp =response;

      if(this.pastlistrsp.status==1 ){
        this.pastLists=this.pastlistrsp.data;
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

  openDetails(id){
    this.router.navigateByUrl('/detailspage/'+id);
    
  }
  openView(id){
    this.router.navigateByUrl('/view-participant/'+id);
    
  }
  paymentPage(id){
    this.router.navigateByUrl('/payment-history/'+id);
    
  }
  paymentList(id){
    this.router.navigateByUrl('/payment-list/'+id);
    
  }

}
