import { ModalComponent } from './../../shared/modal.component';

import { NgModule } from '@angular/core';
import { LogInComponent } from './components/log-in.component';
import {MatToolbarModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatGridListModule,
	 MatInputModule, MatIconModule, MatMenuModule, MatFormFieldModule, MatDatepickerModule,
     MatNativeDateModule, MatProgressSpinner, MatProgressBarModule, MatRadioModule, MatSelectModule,
      MatOptionModule, MatSlideToggleModule, MatDialogRef, MatProgressSpinnerModule, MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { SignUpComponent } from './components/sign-up.component';
import { FooterComponent } from './components/footer.component';
import { SignUpToolbarComponent } from './components/sign-up-toolbar.component';
import { ErrorModalComponent } from '../../shared/error-modal.component';



// tslint:disable:indent
// tslint:disable:no-trailing-whitespace
@NgModule({

    imports: [

		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatMenuModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		BrowserAnimationsModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatRadioModule,
		MatSelectModule,
		MatOptionModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatDialogModule,
        MatProgressSpinnerModule


    ],
    exports: [

    LogInComponent,
    SignUpComponent,
    FooterComponent,
    SignUpToolbarComponent,
	BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    ModalComponent,
    MatDialogModule,
    MatProgressSpinnerModule

    ],
    declarations: [
        LogInComponent,
        SignUpComponent,
        FooterComponent,
        SignUpToolbarComponent,
        ModalComponent,
        ErrorModalComponent

    ],
    providers: [],
    entryComponents: [ModalComponent, ErrorModalComponent]
})
export class LogInModule {

 }
