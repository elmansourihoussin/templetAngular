import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ConfirmDialogModule } from '@core/components/confirm-dialog/confirm-dialog.module';




@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    ConfirmDialogModule

  ],
  exports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    ConfirmDialogModule
  ]

})
export class SharedModule { }
