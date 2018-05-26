import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  private toggleButton: any;
  private sidebarVisible: boolean;
  private invalidLogin: boolean;

  model = {
    left: true,
    middle: false,
    right: false
  };

  constructor(public location: Location, private element : ElementRef,private authService: AuthService,private router: Router) {
    this.sidebarVisible = false;
  }
  // constructor(){}

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
  }

  signIn() {
    let credentials=new FormData();
    credentials.append('userEmail',this.element.nativeElement.querySelector('#userEmail').value);
    credentials.append('userPassword',this.element.nativeElement.querySelector('#userPassword').value);
    this.authService.login(credentials)
      .subscribe(result => {
        if (result){
          this.router.navigate(['/home']);
          this.authService.setLoggedIn(true);
        } else{
          this.invalidLogin=true;
          this.router.navigate(['/log-in']);
        }
      });
  }

}
