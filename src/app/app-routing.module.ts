import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DatabaseComponent} from './database/database.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:"full"},
  {path:'home', component:HomeComponent, pathMatch:"full"},
  {path:'database', component:DatabaseComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
