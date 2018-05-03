import { User } from './../modules/log_in_module/components/user';
import { Injectable } from '@angular/core';

import { QueryFn } from 'angularfire2/database/interfaces';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CustomerProfileService {
    // tslint:disable:no-trailing-whitespace
    private dbPath = '/customers';
    checkuser = false;
    collection: AngularFirestoreCollection<User>;
    users: User[];
    user_logged_in = false;
    currentCustomer: User;
    show_sign_up_panel = false;
    log_in_error = false;
    sign_up_error = false;
    log_in_error_msg = '';
    sign_up_error_msg = '';
    log_in_subject = new Subject<any>();
    sign_up_subject = new Subject<any>();

    constructor(public afs: AngularFirestore) {
    this.collection = afs.collection('/customers') ;

    }

    createUser(user: User): void {
      console.log('Creating User...') ;
       this.collection.add({'Email': user.Email,
       'FirstName': user.FirstName,
       'LastName': user.LastName,
       'Gender': user.Gender,
       'TermsAccepted': user.TermsAccepted,
       'Password': user.Password,
       'PhoneNumber': user.PhoneNumber,
       'Address': user.Address
      });

      this.currentCustomer = user;
      this.user_logged_in = true;
      this.signUpResult();
    }

    signUpInit(user: User) {

      this.sign_up_error = false;
      this.sign_up_error_msg = '';

       this.checkIfUserexists(user, 'signup');
    }

    checkIfUserexists(user: User, comp: string) {

      this.checkuser = false;
      const context = this;
      const collection$: Observable<User[]> = this.collection.valueChanges();
      collection$.subscribe(data =>
      data.forEach(function(value, index) {
      if (value.Email) {
      if (value.Email === user.Email) {

       if (context.checkuser === false) {

        if (comp === 'signup') {
           context.userExists(user);
           context.checkuser = true;
        }

        if (comp === 'login') {
        if (value.Password === user.Password) {

          context.logInUser(value);

        } else {
          context.log_in_error = true;
          context.log_in_error_msg = 'Wrong Password Entered, Try Again';
          context.logInResult();
        }
      }
        context.checkuser = true;

       }

      }
      if (context.checkuser === false) {

        console.log('Email does not exist');
        if (comp === 'signup') {
         context.createUser(user);
        }
        if ( comp === 'login') {
          context.log_in_error = true;
          context.log_in_error_msg = 'This email ' + user.Email + ' does not exist';
          context.logInResult();
        }
        context.checkuser = true;
       }
      }
      })

      );
      collection$.subscribe().unsubscribe();
    }


    userExists(user: User) {
    console.log('Sign up error user exists');
    this.sign_up_error = true;
    this.sign_up_error_msg = 'Email ' + user.Email + ' has been taken, Please use a different Email';
    this.signUpResult();
    }

    authUser(email: string, password: string) {
     this.log_in_error = false;
     this.log_in_error_msg = '';

     const userx = new User();
     userx.Email = email;
     userx.Password = password;
     this.checkIfUserexists(userx, 'login');

    }

    logInUser(user: User) {
     this.user_logged_in = true;
     this.currentCustomer = user;
     console.log('customer logged in!');
     this.logInResult();
    }

    showSignUpPanel() {
     this.show_sign_up_panel = true;
    }

    showLogInPanel() {
     this.show_sign_up_panel = false;
    }

     handleError(error) {
      console.log(error);
    }

    signUpResult() {
    this.sign_up_subject.next();
    this.checkuser = false;
    }

    logInResult() {
      this.log_in_subject.next();
      this.checkuser = false;
    }


  }



