import { Component, OnInit } from '@angular/core';
import {parseHttpResponse, post} from "selenium-webdriver/http";
import {Http} from "@angular/http";
import {MessageServiceService} from "../service/message-service.service";
import * as http from "http";

@Component({
  selector: 'app-message-component',
  templateUrl: './message-component.component.html',
  styleUrls: ['./message-component.component.scss']
})
export class MessageComponentComponent implements OnInit {

  posts:any[];
  private url='http://localhost/ECommers/ECommers/';
  constructor(private service:MessageServiceService) {

  }

  ngOnInit() {
    this.service.getMessage()
        .subscribe(response=>{
              this.posts=response.json();
          });
  }

  // createPost(titel:HTMLInputElement){
  //   let post={titel:titel}
  //   this.http.post(this.url,)
  // }
}
