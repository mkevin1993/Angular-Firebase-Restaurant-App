import { CustomerProfileService } from './../../../shared/customerprofile.service';
import { ModalComponent } from './../../../shared/modal.component';
import { User } from './user';
import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';
import { ErrorModalComponent } from '../../../shared/error-modal.component';


@Component({
    selector:    'app-sign-up',
    templateUrl: 'sign-up.component.html',
    styleUrls:   ['sign-up.component.scss']
})
 // tslint:disable:no-trailing-whitespace
export class SignUpComponent implements OnInit {

    signupForm: FormGroup;

    public user: User;

    is_form_submitted = false;

    constructor(private formbuilder: FormBuilder,
        private cps: CustomerProfileService,
        private dialog: MatDialog,
        private loadingDialogRef: MatDialogRef<ModalComponent>,
        private errorDialogRef: MatDialogRef<ErrorModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any

        ) {
            this.user = new User();
            this.signupForm = formbuilder.group({
            firstname: new FormControl(),
            lastname: new FormControl(),
            email: new FormControl('', [Validators.email]),
            password: new FormControl('', [Validators.maxLength(15), Validators.minLength(8), Validators.required]),
            address: new FormControl(),
            phonenumber: new FormControl('', [Validators.maxLength(15)]),
            gender: new FormControl('', []),
            termsaccepted: new FormControl('', [Validators.requiredTrue])
            });

            cps.sign_up_subject.subscribe(() => {
                console.log('SIGN UP FROM SERVICE');
                 if ( cps.sign_up_error === false) {

                    this.closeLoadingDialog();
                    // this.dialog.openDialogs.pop();
                 } else {
                    this.closeLoadingDialog();
                    // this.dialog.openDialogs.pop();
                    this.openErrorDialog();
                 }

            }
        );
     }

    ngOnInit() {console.log('sign up component initiated'); }

    OnSubmit(signupForm: FormGroup)  {

    console.log('VALID ? ' + signupForm.valid);
    if (signupForm.valid) {
    this.is_form_submitted = true;
    this.user.FirstName = signupForm.controls['firstname'].value;
    this.user.LastName  = signupForm.controls['lastname'].value;
    this.user.Email     = signupForm.controls['email'].value;
    this.user.Password  = signupForm.controls['password'].value;
    this.user.Address   = signupForm.controls['address'].value;
    this.user.PhoneNumber = signupForm.controls['phonenumber'].value;
    this.user.Gender      = signupForm.controls['gender'].value;
    this.user.TermsAccepted = signupForm.controls['termsaccepted'].value;
    console.log(this.user);
    this.signUpCustomer(this.user);

    } else {
    this.is_form_submitted = false;
    }

   }

   resetForm(signupForm: FormGroup) {
   signupForm.reset();
   }

   signUpCustomer(user: User) {

    this.cps.signUpInit(user);
    this.openLoadingDialog();

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
    this.errorDialogRef.componentInstance.error_msg =  this.cps.sign_up_error_msg;

   }

   closeLoadingDialog() {
    this.loadingDialogRef.close();

   }
}
