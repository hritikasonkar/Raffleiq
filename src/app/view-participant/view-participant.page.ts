import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { LoaderService } from '../loader.service';
import { UtilityServiceService } from '../utility-service.service';

@Component({
  selector: 'app-view-participant',
  templateUrl: './view-participant.page.html',
  styleUrls: ['./view-participant.page.scss'],
})
export class ViewParticipantPage implements OnInit {
  raffleid:any;
  rsp:any;
  items=[];

  constructor(private activeroute:ActivatedRoute,public authService:AuthServiceService,private utilityService:UtilityServiceService, private loaderService:LoaderService,) { }

  ngOnInit() {
    this.raffleid =this.activeroute.snapshot.paramMap.get('id');
    console.log("raffleid",this.raffleid);
    this.participant();
  }
  participant(){  
    // this.loaderService.presentLoading();
    this.authService.viewList(this.raffleid).subscribe(response => {
      this.rsp = response;
      console.log("participantResponse",response);
      
      if(this.rsp.status==1){
        this.items=this.rsp.data || [];
        
      }
      else {
        this.items=this.rsp.data || []
      }

    },
    error => {
      console.log("internal error");
      // this.utilityService.presentToast('Internal server error');
    }
    );
  }

}
