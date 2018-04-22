import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
@Injectable()
export class ViewMessagesComponent{
    private url='http://localhost///index.php/Message/viewAll';
    constructor (private http:Http){

    }

}