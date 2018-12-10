import { NgModule } from '@angular/core';
import { ConfirmDialogComponent } from '@core/components/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from '@core/modules/material.module';

@NgModule({
  imports: [MaterialModule],
  declarations: [ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class ConfirmDialogModule { }
