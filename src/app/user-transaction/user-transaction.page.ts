import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { UtilityServiceService } from '../utility-service.service';

@Component({
  selector: 'app-user-transaction',
  templateUrl: './user-transaction.page.html',
  styleUrls: ['./user-transaction.page.scss'],
})
export class UserTransactionPage implements OnInit {
  items= [];
  list:any;

  constructor(private authService:AuthServiceService,private utilityService:UtilityServiceService,) { }

  ngOnInit() {
    this.transctionList();
  }
  transctionList(){
   
    this.authService.userTransaction().subscribe(response =>{
      
      console.log("list",response);
      this.list =response;

      if(this.list.status==1 ){
        this.items=this.list.data;
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
