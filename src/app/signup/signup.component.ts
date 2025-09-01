import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { floor } from 'mathjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private router:Router){}

  onSubmit(form:any){
    console.log(form.value)
    alert('Form Submitted Successfully..!')
    form.reset()
    this.router.navigateByUrl('home')
  }
}
