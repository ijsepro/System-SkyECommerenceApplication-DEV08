import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    this.subTitelOne;
    this.subTitelTwo;
    this.subTitelThree;
    this.subTitelFour;
    this.subTitelFive;
    this.subTitelSix;
  }

  ngOnInit() {
  }

  subTitelOne    =   'USER';
  subTitelTwo    =   'COMPANEY';
  subTitelThree  = 'CLIENTS';
  subTitelFour   =  'COMMENTS';
  subTitelFive   =  'BLOCK ACCOUNT';
  subTitelSix    =   'ORDERS';
}
