import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  // users: any[] = [];  // list to store registered users

  user = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }

  emailErrorVisible = false;
  passwordErrorVisible = false;

  constructor(private router: Router, private signupService: SignupService) {}

  onSubmit() {
    this.emailErrorVisible = !this.isEmailValid(this.user.email);
    this.passwordErrorVisible = !this.isPasswordValid(this.user.password);

    if (this.isFormValid()) {
      // ✅ add user details to list
      // this.users.push({ ...this.user }); 
      this.signupService.addUser({ ...this.user }); 

      alert("Form Submitted Successfully!");
      console.log("Registered Users:", this.signupService.getUsers());  // for debugging

      // Clear form
      this.user = {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
      };

      this.router.navigateByUrl('home');
    } else {
      alert("Form is Invalid!");
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

  isFormValid(): boolean {
    return (
      this.user.firstname.trim() !== '' &&
      this.user.lastname.trim() !== '' &&
      this.isEmailValid(this.user.email) &&
      this.isPasswordValid(this.user.password)
    );
  }
}
