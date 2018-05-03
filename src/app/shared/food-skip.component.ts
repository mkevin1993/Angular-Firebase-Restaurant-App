
import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-food-skip',
    templateUrl: 'food-skip.component.html',
    styleUrls: ['food-skip.component.css']
})

export class FoodSkipDialogComponent implements OnInit {
    meal: string;
    @Output() closeandorder = new EventEmitter();
    constructor() { }

    ngOnInit() { }

    closeAndOrderNext() {
        this.closeandorder.emit();
    }
}
