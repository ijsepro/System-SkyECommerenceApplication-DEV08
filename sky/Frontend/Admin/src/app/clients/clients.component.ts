import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

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
