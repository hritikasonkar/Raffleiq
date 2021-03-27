import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  user_type:any;

  constructor() { }

  ngOnInit() {
    this.user_type=localStorage.getItem('user_type');

  }


}
