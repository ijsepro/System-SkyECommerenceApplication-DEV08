import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import {  Routes,RouterModule } from '@angular/router';
import { BrowserModule  } from '@angular/platform-browser';
import {LogInComponent} from "./log-in/log-in.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {HomeComponent} from "./home/home.component";
import {ClientComponent} from "./client/client.component";
import {CommentsComponent} from "./comments/comments.component";
import {UserComponent} from "./user/user.component";
import {UserRegistrationComponent} from "./user/user-registration/user-registration.component";
import {UserViewAllComponent} from "./user/user-view-all/user-view-all.component";

const routes: Routes = [
  { path:'log-in', component: LogInComponent },
  { path:'header',component:HeaderComponent},
  { path:'footer',component:FooterComponent},
  { path:'home',component:HomeComponent},
  { path:'client',component:ClientComponent},
  { path:'comment',component:CommentsComponent},
  { path:'user',component:UserComponent},
  { path:'user',component:UserComponent},
  { path:'userRegistration',component:UserRegistrationComponent},
  { path:'userViewAll',component:UserViewAllComponent},
  { path:'',redirectTo: 'log-in', pathMatch: 'full' }
];

@NgModule({
  imports:[RouterModule.forRoot(routes),BrowserModule,CommonModule],
  exports:[RouterModule]
})
export class AppRoutingModule { }
