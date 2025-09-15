import { SignupService } from './../signup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit{
  data : any
  constructor(private signupService: SignupService){}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void{
    this.signupService.getUsers().subscribe({
      next: (resp) =>{
        this.data = resp
        console.log(this.data)
        alert("Data has been fetched..!")
      },
      error: (err) =>{
        alert("Unabl to fetch data..!")
      }
    })
  }
}
