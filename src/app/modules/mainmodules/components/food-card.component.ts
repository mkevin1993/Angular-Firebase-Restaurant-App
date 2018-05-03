import { CommonModule } from '@angular/common';
import { FoodService } from './../../../shared/food.service';
import { Component, OnInit, Input, NgModule, ComponentFactory,
       ComponentRef, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef,
       TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Food } from '../../../shared/food';


@Component({
    selector: 'app-food-card',
    templateUrl: 'food-card.component.html',
    styleUrls: ['food-card.component.scss']
})

export class FoodCardComponent implements OnInit {
    @Input() type: Food;
    is_selected = false;
    constructor(private foodservice: FoodService) {
        foodservice.unselectfoodcard.subscribe(() => {
            this.type.selected = false;

       }
   );
    }

    ngOnInit() {
        console.log('food card component initialized');
    }

    foodOrder() {
        this.type.selected = !this.type.selected;
        if (this.type.selected === true) {
            this.foodservice.addOrder(this.type);
        } else {
            this.foodservice.removeOrder(this.type);
        }

    }
}
