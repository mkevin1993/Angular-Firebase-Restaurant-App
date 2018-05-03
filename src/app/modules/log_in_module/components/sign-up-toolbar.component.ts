import { CustomerProfileService } from './../../../shared/customerprofile.service';

import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-sign-up-toolbar',
    templateUrl: 'sign-up-toolbar.component.html',
    styleUrls: ['sign-up-toolbar.component.scss']
})
// tslint:disable:no-trailing-whitespace
export class SignUpToolbarComponent implements OnInit {

    constructor(private cps: CustomerProfileService) {

    }

    ngOnInit() { }

    sign_up() {

         this.cps.showSignUpPanel();
      }

    log_in() {

         this.cps.showLogInPanel();
      }
}
