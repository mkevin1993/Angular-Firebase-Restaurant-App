import { CustomerProfileService } from './../../../shared/customerprofile.service';
import { DatePipe } from '@angular/common';
import { FoodService } from './../../../shared/food.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-left',
    templateUrl: 'left.component.html',
    styleUrls: ['left.component.scss']
})

export class LeftComponent implements OnInit {
    reservation_step_done = false;
    wine_step_done = false;
    dessert_step_done = false;
    starters_step_done = false;
    checkout_step_done = false;
    main_step_done = false;

    reservation_step_time = '';
    wine_step_time = '';
    dessert_step_time = '';
    starters_step_time = '';
    checkout_step_time = '';
    main_step_time = '';

    datepipe: DatePipe;
    constructor(public cps: CustomerProfileService,
               public foodservice: FoodService ) {

    this.datepipe = new DatePipe('en-US');
    foodservice.fromservice.subscribe( data => {
         console.log('data from food service  ' + data);
          // tslint:disable:no-trailing-whitespace
         switch (data) {
          case 0: {
          this.reservation_step_done = true;
          this.reservation_step_time = this.getTime();
          break;
          }

          case 1: {
          this.wine_step_done = true;
          this.wine_step_time = this.getTime();
          break;
          }

          case 2: {
          this.starters_step_done = true;
          this.starters_step_time = this.getTime();
          break;
          }

          case 3: {
          this.main_step_done = true;
          this.main_step_time = this.getTime();
          break;
          }

          case 4: {
          this.dessert_step_done = true;
          this.dessert_step_time = this.getTime();
          break;
          }

          case 5: {
          this.checkout_step_done = true;
          this.checkout_step_time = this.getTime();
          break;
          }

          default: {

            break;
         }

         }
    });

    }

    ngOnInit() { }

    getTime() {

     return this.datepipe.transform(new Date().getTime(), 'h:mm a');
    }
}
