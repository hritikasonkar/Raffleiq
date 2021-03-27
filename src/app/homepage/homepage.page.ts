import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  todayItems=[];
  upcomingItems=[];

  constructor(public authService:AuthServiceService) { }

  ngOnInit() {
   // this.listing();
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

}
