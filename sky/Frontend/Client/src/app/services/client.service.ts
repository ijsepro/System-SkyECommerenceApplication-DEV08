import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = 'http://localhost/sky-new/Backend/index.php/client/insert/';

  constructor(private http: Http) {
  }

  registerClient(formdata) {
    return this.http.post(this.url, formdata);
  }
}
