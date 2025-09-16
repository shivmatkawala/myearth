import { Component, OnInit } from '@angular/core';
import { Form1Service } from '../form1.service';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit{

  data : any

  constructor(private animalService: Form1Service){}

  ngOnInit(): void {
    this.getAnimals()
  }

  getAnimals(): void{
    this.animalService.getAnimal().subscribe({
      next: (resp) =>{
        this.data = resp;
        alert("Data has been fetched..!")
        console.log(this.data)
      },
      error: (err) =>{
        alert("Unable to fetch the data..!")
      }
    })
  }

  deleteAnimal(id: string): void{
    this.animalService.deleteAnimal(id).subscribe({
      next: (resp) =>{
        alert("Animal has been deleted")
        this.getAnimals();
      },
      error: (err) =>{
        alert("Not able to delete the animal")
      }
    })
  }
}
