import { Component, OnInit, Input, NgModule, ComponentFactory,
    ComponentRef, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef,
    TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Food } from '../../../shared/food';

@Component({
 selector: 'app-orders-card',
 templateUrl: 'orders.component.html',
 styleUrls: ['orders.component.scss']
})

export class OrdersComponent implements OnInit {
 @Input() type: Food;

 constructor() {

 }

 ngOnInit() {
     console.log('order component initialized');
     console.log(this.type);
 }
}
