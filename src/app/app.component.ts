import { CustomerProfileService } from './shared/customerprofile.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  is_customer_logged_in = false;
  show_sign_up_form = false;
  constructor(public cps: CustomerProfileService ) {
    this.is_customer_logged_in = cps.user_logged_in;
    this.show_sign_up_form = cps.show_sign_up_panel;

 }
  receiveMessage($event) {
    this.is_customer_logged_in = $event;
  }



}

