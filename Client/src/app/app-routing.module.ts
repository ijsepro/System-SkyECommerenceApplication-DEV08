import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { BrowserModule  } from '@angular/platform-browser';
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {NaveBarComponent} from "./header/nave-bar/nave-bar.component";
import {NaveBodyComponent} from "./header/nave-body/nave-body.component";
import {UserDashbordComponent} from "./user-dashbord/user-dashbord.component";
import {UserLoginComponent} from "./user-login/user-login.component";
import {UserRegisterComponent} from "./user-register/user-register.component";
import {FooterLinkComponent} from "./footer/footer-link/footer-link.component";
import {FooterComponent} from "./footer/footer.component";
import {ClientViewFeedBackComponent} from "./client-view-feed-back/client-view-feed-back.component";


const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'header',component:HeaderComponent},
  { path:'nave-bar',component:NaveBarComponent},
  { path:'nave-body',component:NaveBodyComponent},
  { path:'user-dash',component:UserDashbordComponent},
  { path:'user-login',component:UserLoginComponent},
  { path:'user-regis',component:UserRegisterComponent},
  { path:'footer-link',component:FooterLinkComponent},
  { path:'footer',component:FooterComponent},
  { path:'client-view-feed-back',component:ClientViewFeedBackComponent},
  { path:'',redirectTo: 'home', pathMatch: 'full' },
  // {path: 'layout', canActivate: [AuthGuard]}

];

@NgModule({
  imports:[RouterModule.forRoot(routes),BrowserModule,CommonModule],
  exports:[RouterModule]
})
export class AppRoutingModule { }
