import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
    selector: 'app-modal',
    templateUrl: './error-modal.component.html',
    styleUrls: ['./error-modal.component.css']
})

export class ErrorModalComponent {
  error_msg: string;
}
