import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './header/header.component';
import { NaveBarComponent } from './header/nave-bar/nave-bar.component';
import { NaveBodyComponent } from './header/nave-body/nave-body.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';
import { FooterComponent } from './footer/footer.component';
import { FooterLinkComponent } from './footer/footer-link/footer-link.component';
import {ClientService} from "./services/client.service";
import {LogInService} from "./services/log-in.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NaveBarComponent,
    NaveBodyComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserDashbordComponent,
    FooterComponent,
    FooterLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule
  ],
  providers: [
    ClientService,
    LogInService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
