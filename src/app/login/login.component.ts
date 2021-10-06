import { Component, OnInit } from '@angular/core';
import * as ons from 'onsenui';
import { OnsNavigator } from 'ngx-onsenui';
import { ContentContainerComponent } from '../content-container/content-container.component';

@Component({
  selector: 'ons-page[login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public onsNav: OnsNavigator
  ) { }

  ngOnInit() {
  }

  
  login(){
    this.onsNav.element.pushPage(ContentContainerComponent,{animation:'slide'});
  }

}
