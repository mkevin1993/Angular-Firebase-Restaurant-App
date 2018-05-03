import { ScrollbarModule } from 'ngx-scrollbar';
import { CenterComponent } from './components/center.component';
import { LeftComponent } from './components/left.component';
import { NgModule } from '@angular/core';
import { RightComponent } from './components/right.component';
import { MainToolBarComponent } from './components/main-toolbar.component';
import { FoodCardComponent } from './components/food-card.component';
import {MatToolbarModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatGridListModule,
    MatInputModule, MatIconModule, MatMenuModule, MatFormFieldModule, MatDatepickerModule,
    MatNativeDateModule, MatDividerModule, MatRadioModule, MatSelectModule, MatOptionModule,
    MatSlideToggleModule, MatDialogModule, MatDialogRef} from '@angular/material';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders.component';
import { FoodSkipDialogComponent } from '../../shared/food-skip.component';
import { CheckOutComponent } from '../../shared/checkout.component';


@NgModule({
    imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDividerModule,
    CommonModule,
    MatDialogModule
    ],

    exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDividerModule,
    MatDialogModule,
        RightComponent,
        LeftComponent,
        CenterComponent,
        MainToolBarComponent,
        FoodCardComponent,
        OrdersComponent,
        FoodSkipDialogComponent,
        CheckOutComponent

    ],
    declarations: [
        RightComponent,
        LeftComponent,
        CenterComponent,
        MainToolBarComponent,
        FoodCardComponent,
        OrdersComponent,
        FoodSkipDialogComponent,
        CheckOutComponent
    ],
    providers: [],
    entryComponents: [FoodCardComponent, OrdersComponent, FoodSkipDialogComponent, CheckOutComponent]
})
export class MainModule { }
