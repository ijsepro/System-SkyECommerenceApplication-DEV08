import {Component, ElementRef, OnInit} from '@angular/core';
import {SystemUserService} from "../../service/system-user.service";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  url:any='../../../../assets/images/logo.png';

  admin: any = [];

  constructor(private service: SystemUserService, private elem: ElementRef) {
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
    // let files = this.elem.nativeElement.querySelector('#selectFile').files;

    let formData = new FormData();
    // let file = files[0];
    // formData.append('selectFile', file, file.name);
    let firstName = this.elem.nativeElement.querySelector('#firstName').value;
    let lastName = this.elem.nativeElement.querySelector('#lastName').value;
    let email = this.elem.nativeElement.querySelector('#email').value;
    let password = this.elem.nativeElement.querySelector('#password').value;
    let addressLine1 = this.elem.nativeElement.querySelector('#addressLine1').value;
    let addressLine2 = this.elem.nativeElement.querySelector('#addressLine2').value;
    let mobile = this.elem.nativeElement.querySelector('#mobile').value;
    let mail = this.elem.nativeElement.querySelector('#mail').value;
    let country = this.elem.nativeElement.querySelector('#country').value;
    let city = this.elem.nativeElement.querySelector('#city').value;
    let cityCode = this.elem.nativeElement.querySelector('#cityCode').value;
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('addressLine1', addressLine1);
    formData.append('addressLine2', addressLine2);
    formData.append('mobile', mobile);
    formData.append('mail', mail);
    formData.append('country', country);
    formData.append('city', city);
    formData.append('cityCode', cityCode);
    this.service.registerAdmin(formData)
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
