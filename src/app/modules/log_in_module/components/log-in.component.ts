import { CustomerProfileService } from './../../../shared/customerprofile.service';
import { ModalComponent } from './../../../shared/modal.component';
import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { ErrorModalComponent } from '../../../shared/error-modal.component';

@Component({
    selector:    'app-log-in',
    templateUrl: 'log-in.component.html',
    styleUrls:   ['log-in.component.scss']
})

export class LogInComponent implements OnInit {
    // tslint:disable:no-trailing-whitespace

    loginForm: FormGroup;

    private email;
    private password;

    ngOnInit() {console.log('log in component initiated'); }

    constructor(private formbuilder: FormBuilder,
                 private cps: CustomerProfileService,
                 private dialog: MatDialog,
                 private loadingDialogRef: MatDialogRef<ModalComponent>,
                 private errorDialogRef: MatDialogRef<ErrorModalComponent>,
                 @Inject(MAT_DIALOG_DATA) public data: any
                 ) {

        this.loginForm = formbuilder.group({

        email: new FormControl('', [Validators.email]),
        password: new FormControl('', [Validators.maxLength(15), Validators.minLength(8), Validators.required]),

        });

        cps.log_in_subject.subscribe(() => {
            console.log('LOG IN COMPONENT SUBJECT FROM SERVICE');
            if ( cps.log_in_error === false) {

               this.closeLoadDialog();
               this.dialog.openDialogs.pop();
            } else {
               this.closeLoadDialog();
               this.dialog.openDialogs.pop();
               this.openErrorDialog();
            }

       });
    }

    OnSubmit(loginForm: FormGroup)  {

        if (loginForm.valid) {
        this.email     = loginForm.controls['email'].value;
        this.password  = loginForm.controls['password'].value;
        this.openLoadingDialog();
        this.cps.authUser(this.email, this.password);

        }
       }

       openLoadingDialog() {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        this.loadingDialogRef = this.dialog.open(ModalComponent, dialogConfig);

       }

       openErrorDialog() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.errorDialogRef = this.dialog.open(ErrorModalComponent, dialogConfig);
        this.errorDialogRef.componentInstance.error_msg =  this.cps.log_in_error_msg;

       }

       closeLoadDialog() {
        try {
        this.loadingDialogRef.close();
        } catch {

        }
       }

}
