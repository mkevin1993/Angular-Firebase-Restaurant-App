import { FoodService } from './../../../shared/food.service';
import { Component, OnInit, Inject, Input, NgModule, ComponentFactory,
    ComponentRef, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef,
    TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Food } from '../../../shared/food';
import { Observable } from 'rxjs/Observable';
import { FoodCardComponent } from './food-card.component';
import { ScrollbarModule } from 'ngx-scrollbar';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';
import { FoodSkipDialogComponent } from '../../../shared/food-skip.component';
import { CheckOutComponent } from '../../../shared/checkout.component';

@Component({
    selector: 'app-main-center',
    templateUrl: 'center.component.html',
    styleUrls: ['center.component.scss']
})
// tslint:disable:no-trailing-whitespace
export class CenterComponent implements OnInit {
    starters: Food[];
    wines: Food[];
    desserts: Food[];
    main_course: Food[];
    orders_count = 0;
    meal_ordered = false;
    @ViewChild('centerFoodContainer', { read: ViewContainerRef }) container: ViewContainerRef;
    componentRef: ComponentRef<any>;
    constructor(public foodservice: FoodService,
         private resolver: ComponentFactoryResolver,
         private toastr: ToastrService,
         private dialog: MatDialog,
         private skipdialog: MatDialogRef<FoodSkipDialogComponent>,
         private checkoutdialog: MatDialogRef<CheckOutComponent>,
         @Inject(MAT_DIALOG_DATA) public data: any) {

     }

    ngOnInit() {
        this.confrimReservation();
        this.getWines();
     }

     createComponent(type) {

        const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(FoodCardComponent);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.type = type;

      }

     getStarters() {
         this.container.clear();
         this.starters =  this.foodservice.getStarters();
         const context = this;
         this.starters.forEach(function(value) {
            context.createComponent(value);
         });
     }

     getWines() {
        this.container.clear();
        this.wines =  this.foodservice.getWines();
        const context = this;
        this.wines.forEach(function(value) {
           context.createComponent(value);
        });
    }

    getDesserts() {
        this.container.clear();
        this.desserts =  this.foodservice.getDesserts();
        const context = this;
        this.desserts.forEach(function(value) {
           context.createComponent(value);
        });
    }

    getMainCourse() {
        this.container.clear();
        this.main_course =  this.foodservice.getMainCourse();
        const context = this;
        this.main_course.forEach(function(value) {
           context.createComponent(value);
        });
    }

     confrimReservation() {

     this.foodservice.step();

    }

    onOrder() {
      if (this.foodservice.orders.length > 0) {
      this.meal_ordered = true;
      this.foodservice.onOrder();
      this.toastr.success('Please wait while your order is prepaired', 'Order Received!');
      }
    }

    nextMeal() {
        if (this.meal_ordered === false && this.foodservice.steps < 4) {
            this.openskipDialog();
            return;
        }
        this.foodservice.nextMeal();
        this.meal_ordered = false;
        switch (this.foodservice.steps) {
            case 0: {
                this.getWines();
               break;
            }
            case 1: {
                this.getStarters();
               break;
           }
            case 2: {
               this.getMainCourse();
               break;

           }
            case 3: {
                this.getDesserts();
               break;
           }
           case 4: {
            this.openCheckOutDialog();
           break;
           }

           default : {
           break;
           }

           }


    }

    openskipDialog() {

        const dialogConfig = new MatDialogConfig();

         dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        this.skipdialog = this.dialog.open(FoodSkipDialogComponent, dialogConfig);
        this.skipdialog.componentInstance.meal =  this.foodservice.flow[this.foodservice.array_steps].now;
        const sub = this.skipdialog.componentInstance.closeandorder.subscribe(() => {
            this.closeAndOrderNext();

          });
          this.skipdialog.afterClosed().subscribe(() => {
            this.skipdialog.componentInstance.closeandorder.unsubscribe();
          });

       }

       openCheckOutDialog() {

        const dialogConfig = new MatDialogConfig();

         dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        this.checkoutdialog = this.dialog.open(CheckOutComponent, dialogConfig);
        this.checkoutdialog.componentInstance.amount =  this.foodservice.food_sum;
        const sub = this.checkoutdialog.componentInstance.confirmpayment.subscribe(() => {
            this.toastr.success('Your payment has been received.Thank u', 'Payment Success');
            this.foodservice.steps = 5;
            this.foodservice.step();
          });
          this.checkoutdialog.afterClosed().subscribe(() => {
            this.checkoutdialog.componentInstance.confirmpayment.unsubscribe();
          });

       }

    closeSkipDialog() {
         this.skipdialog.close();

       }

    closeAndOrderNext() {
        this.skipdialog.close();
        this.meal_ordered = true;
        this.nextMeal();
    }


}
