import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service/service.service"

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  posts:any[];
  // private url='http://localhost/E-com/Backend/';
  // constructor(private service:ServiceService) { }
  constructor(private service:ServiceService){}

  ngOnInit() {
    this.service.getMessage()
      .subscribe(response=>{
        this.posts=response.json();
        console.log(response.json());
      });
  }

}
