import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/content/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'apps/home', pathMatch: 'full' },
  { path: 'apps/home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
