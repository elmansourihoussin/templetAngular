import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '@core/modules/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
