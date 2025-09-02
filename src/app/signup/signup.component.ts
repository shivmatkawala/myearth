import { Component } from '@angular/core';
import { Route, Router, TitleStrategy } from '@angular/router';
import { floor } from 'mathjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user ={
    firsname:'',
    lastname:'',
    email:'',
    password:''
  }

  constructor(private router:Router){}

  onSubmit(){
    if (this.isFormValid()){
      alert("Form Submitted Successfully..")
      this.router.navigateByUrl('home')
    }else{
      alert("Form is Invalid..!")
    }
  }

  isFormValid(): boolean{
    return(
      this.user.firsname.trim() !== '' &&
      this.user.lastname.trim() !== '' &&
      this.user.email.trim() !== '' &&
      this.user.password.trim() !== ''
    )
  }
}
