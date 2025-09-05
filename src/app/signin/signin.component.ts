import { Route, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  credentials = {
    email: '',
    password: ''
  }
  constructor(private router:Router){}

  onSubmit(){
    if (this.isFormValid()){
      console.log(this.credentials)
      alert("Form Submitted Successsfully")
      this.router.navigateByUrl('home')
    }else{
      alert("Invalid Form")
    }
  }

  isFormValid(): boolean{
    return(
      this.credentials.email.trim() !== "" &&
      this.credentials.password.trim() !== ""
    );
  }
}
