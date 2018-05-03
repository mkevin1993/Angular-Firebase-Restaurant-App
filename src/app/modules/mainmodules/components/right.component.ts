
import { FoodService } from './../../../shared/food.service';
import { Component, OnInit, Input, NgModule, ComponentFactory,
    ComponentRef, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef,
    TemplateRef, ViewChild, Output, EventEmitter, Inject } from '@angular/core';
import { Food } from '../../../shared/food';
import { Observable } from 'rxjs/Observable';
import { FoodCardComponent } from './food-card.component';
import { ScrollbarModule } from 'ngx-scrollbar';
import { OrdersComponent } from './orders.component';
import { CheckOutComponent } from '../../../shared/checkout.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-main-right',
    templateUrl: 'right.component.html',
    styleUrls: ['right.component.scss']
})

export class RightComponent implements OnInit {
    @ViewChild('foodOrderContainer', { read: ViewContainerRef }) container: ViewContainerRef;
    componentRef: ComponentRef<any>;
    food_sum = 0;
    constructor(public foodservice: FoodService,
        private resolver: ComponentFactoryResolver) {
        foodservice.addorderstopanel.subscribe(() => {
        this.addOrdersToPanel();
        }
        );
     }

    ngOnInit() { }

    createComponent(type) {
        const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(OrdersComponent);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.type = type;
      }

      addOrdersToPanel() {
        const context = this;
        this.foodservice.orders.forEach(function(value) {
           context.createComponent(value);
           context.food_sum += Number(value.value);
           context.foodservice.food_sum += Number(value.value);
        });

        this.foodservice.orders = [];
      }

}
