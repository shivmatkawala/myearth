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

  emailErrorVisible=false;
  passwordErrorVisible= false;
  constructor(private router:Router){}

  onSubmit(){
    this.emailErrorVisible = !this.isEmailValid(this.user.email)
    this.passwordErrorVisible = !this.isPasswordValid(this.user.password)
    if (this.isFormValid()){
      alert("Form Submitted Successfully..")
      this.router.navigateByUrl('home')
    }else{
      alert("Form is Invalid..!")
    }
  }

  isEmailValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email.trim());
  };

  isPasswordValid(password: string): boolean {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password.trim());
  }
  isFormValid(): boolean{
    return(
      this.user.firsname.trim() !== '' &&
      this.user.lastname.trim() !== '' 
    )
  }
}
