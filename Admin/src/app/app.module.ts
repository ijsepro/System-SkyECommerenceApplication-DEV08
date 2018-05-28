import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CommentsComponent } from './comments/comments.component';
import {ServiceService} from "./service/service.service";
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { UserViewAllComponent } from './user/user-view-all/user-view-all.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CommentsComponent,
    UserComponent,
    UserRegistrationComponent,
    UserViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule
  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
