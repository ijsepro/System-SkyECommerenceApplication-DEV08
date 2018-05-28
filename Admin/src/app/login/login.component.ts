import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
    this.log_in_home_header;
    this.log_in_home_header_sub;
    this.footer_titel;
  }

  ngOnInit() {
  }

  log_in_home_header='SKY | ONLINE SHOPPING CENTER';
  log_in_home_header_sub='WELCOME ADMIN LOG IN';
  footer_titel='IJSE@ DIV-08 Group';
}
