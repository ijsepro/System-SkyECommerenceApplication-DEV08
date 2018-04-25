import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class MessageServiceService {
  private url='http://localhost/ECommers/ECommers/';

  constructor(private http:Http) {

  }
  getMessage(){
      return this.http.get(this.url);
  }

}
