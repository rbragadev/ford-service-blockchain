import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BadgeModule } from 'primeng/badge';
import { StyleClassModule } from 'primeng/styleclass';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { MenuModule } from 'primeng/menu';
import { DialogModule as ModalModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { SplitterModule } from 'primeng/splitter';
import { InputNumberModule } from 'primeng/inputnumber';
import { DividerModule } from 'primeng/divider';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    BadgeModule,
    InputTextModule,
    InputTextareaModule,
    StyleClassModule,
    CardModule,
    FormsModule,
    RatingModule,
    MenuModule,
    ModalModule,
    CheckboxModule,
    DropdownModule,
    SplitterModule,
    InputNumberModule,
    DividerModule,
    CalendarModule,
  ],
  exports: [
    ButtonModule,
    RippleModule,
    BadgeModule,
    InputTextModule,
    InputTextareaModule,
    StyleClassModule,
    CardModule,
    FormsModule,
    RatingModule,
    MenuModule,
    ModalModule,
    CheckboxModule,
    DropdownModule,
    SplitterModule,
    InputNumberModule,
    DividerModule,
    CalendarModule,
  ],
})
export class PrimengModule {}
