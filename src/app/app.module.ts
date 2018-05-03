import { CustomerProfileService } from './shared/customerprofile.service';
import { FoodService } from './shared/food.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFirestoreModule, AngularFirestoreCollection} from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LogInModule } from './modules/log_in_module/log-in.module';
import { CookieService } from 'ngx-cookie-service';
import { MainModule } from './modules/mainmodules/main.module';
import { BarRatingModule } from 'ngx-bar-rating';
import { ScrollbarModule } from 'ngx-scrollbar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 // tslint:disable:no-trailing-whitespace
 import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    LogInModule,
    MainModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BarRatingModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule



  ],
  providers: [
     CustomerProfileService,
     CookieService,
     FoodService,
     { provide: MatDialogRef, useValue: {} },
      { provide: MAT_DIALOG_DATA, useValue: [] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
