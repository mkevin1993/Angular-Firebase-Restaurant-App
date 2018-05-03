import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-checkout',
    templateUrl: 'checkout.component.html',
    styleUrls: ['checkout.component.scss']
})

export class CheckOutComponent implements OnInit {
    amount: number;
    apple_pay = false;
    cash = false;
    card = false;
    paypal = false;
    @Output() confirmpayment = new EventEmitter();
    constructor() { }

    ngOnInit() { }

    confirmPayment() {
      if (this.apple_pay === true || this.card === true || this.cash === true || this.paypal === true) {
        this.confirmpayment.emit();
      }
    }

    selectCash() {
    this.cash = true;
    this.apple_pay = false;
    this.card = false;
    this.paypal = false;
    }

    selectCC() {
        this.card = true;
        this.apple_pay = false;
        this.cash = false;
         this.paypal = false;
    }

    selectPP() {
        this.paypal = true;
        this.apple_pay = false;
        this.cash = false;
        this.card = false;
    }

    selectAP() {
        this.apple_pay = true;
        this.cash = false;
        this.card = false;
        this.paypal = false;
    }
}
