import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './content/home/home.component';
import { HomeModule } from './content/home/home.module';
import { SharedModule } from '../core/modules/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HomeModule
  ],
  declarations: [
    MainComponent,
    ToolbarComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
