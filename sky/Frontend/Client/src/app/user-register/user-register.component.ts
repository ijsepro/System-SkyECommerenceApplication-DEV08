import {Component, ElementRef, OnInit} from '@angular/core';
import {ClientService} from "../services/client.service";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  url:any='../../../../assets/images/logo.png';

  admin: any = [];

  constructor(private service: ClientService, private elem: ElementRef) {
  }

  ngOnInit() {
  }
  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  newSystemUser() {
    let formData = new FormData();
    let firstName = this.elem.nativeElement.querySelector('#firstName').value;
    let lastName = this.elem.nativeElement.querySelector('#lastName').value;
    let email = this.elem.nativeElement.querySelector('#email').value;
    let password = this.elem.nativeElement.querySelector('#password').value;
    let mobile = this.elem.nativeElement.querySelector('#mobile').value;
    let country = this.elem.nativeElement.querySelector('#country').value;
    let city = this.elem.nativeElement.querySelector('#city').value;
    let cityCode = this.elem.nativeElement.querySelector('#cityCode').value;

    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('mobile', mobile);
    formData.append('country', country);
    formData.append('city', city);
    formData.append('cityCode', cityCode);

    this.service.registerClient(formData)
      .subscribe(res => {
        if (res.json() === 1) {
          console.log("Egister");
          // this.toastr.success('Registered', '');
        } else {
          console.log("eorro");
          // this.toastr.error('Error!!!', '');
        }
      });

  }

}
