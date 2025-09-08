import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router) {}

  goToForm2(){
    this.router.navigateByUrl('form2')
  }
  goToForm3(){
    window.location.href = '/form3'
  }
}
