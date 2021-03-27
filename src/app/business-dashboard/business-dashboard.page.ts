import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-business-dashboard',
  templateUrl: './business-dashboard.page.html',
  styleUrls: ['./business-dashboard.page.scss'],
})
export class BusinessDashboardPage implements OnInit {
  todayItems=[];
  upcomingItems=[];

  constructor(public authService:AuthServiceService,public router :Router,) { }
 

  ngOnInit() {
    
  }
  ionViewWillEnter(){
    this.listing();

  }


  listing(){
    this.authService.bsnList().subscribe((response :any) =>{
      console.log(response);
      if(response.status==1){
        this.todayItems=response.data_today_event;
        console.log("ggggggh",response.data_today_event)
        this.upcomingItems=response.data_upcoming_event;

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

}
