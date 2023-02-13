import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { StyleClassModule } from 'primeng/styleclass';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    BadgeModule,
    InputTextModule,
    StyleClassModule,
    CardModule,
  ],
  exports: [
    ButtonModule,
    RippleModule,
    BadgeModule,
    InputTextModule,
    StyleClassModule,
    CardModule,
  ],
})
export class PrimengModule {}
