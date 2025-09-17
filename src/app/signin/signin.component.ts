import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';

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

  constructor(private router: Router, private signupService: SignupService) {}

  onSubmit() {
    if (this.isFormValid()) {
      this.signupService.login(this.credentials.email, this.credentials.password).subscribe(user => {
        if (user) {
          alert("✅ Login Successful!");
          // Optionally store user in localStorage/session
          localStorage.setItem('user', JSON.stringify(user));

          this.router.navigateByUrl('home');
        } else {
          alert("❌ Invalid email or password");
        }
      });
    } else {
      alert("⚠️ Please fill in all fields");
    }
  }

  isFormValid(): boolean {
    return (
      this.credentials.email.trim() !== "" &&
      this.credentials.password.trim() !== ""
    );
  }
}
