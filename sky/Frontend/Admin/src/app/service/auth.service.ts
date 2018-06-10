import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
// import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class AuthService {

  // private url = 'http://localhost/E-com/Backend/index.php/login';
  // private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private http: Http) {
  }

  // login(credentials) {
  //   return this.http.post(this.url, credentials).map(
  //   response => {
  //     if ((response.json()).success) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  //   );
  // }

  // logout() {
  //   localStorage.removeItem('loggedIn');
  // }
  //
  //
  // setLoggedIn(value: boolean) {
  //   this.loggedInStatus = value;
  //   localStorage.setItem('loggedIn', 'true');
  // }
  //
  // isLoggedIn() {
  //   return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  // }
}
