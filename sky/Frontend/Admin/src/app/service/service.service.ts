import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ServiceService {
  private url='http://localhost/E-com/Backend/index.php';
  constructor(private http:Http) {

  }
  getMessage(){
    return this.http.get(this.url);
  }
}
