import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class SystemUserService {

  private url = 'http://localhost/E-com/Backend/index.php/SystemUser/insert/';

  constructor(private http: Http) {
  }

  registerAdmin(formdata) {
    return this.http.post(this.url, formdata);
  }

  sendEmail(formdata) {
    return this.http.post('http://localhost/E-com/Backend/index.php/SystemUser/insert/', formdata);
  }

}
