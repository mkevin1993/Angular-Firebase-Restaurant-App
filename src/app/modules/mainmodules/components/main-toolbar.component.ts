import { CustomerProfileService } from './../../../shared/customerprofile.service';

import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-main-toolbar',
    templateUrl: 'main-toolbar.component.html',
    styleUrls: ['main-toolbar.component.scss']
})

export class MainToolBarComponent implements OnInit {
    today;
    datepipe: DatePipe;
    constructor(private cps: CustomerProfileService) {
     this.datepipe = new DatePipe('en-US');
     this.today = this.datepipe.transform(new Date().getTime(), 'EEEE, MMMM d, y');
    }

    ngOnInit() {

    }
}
