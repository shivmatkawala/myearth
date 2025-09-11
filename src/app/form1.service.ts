import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Form1Service {

  animals: any[] = []
  constructor() { }

  addAnimal(form:any){
    this.animals.push(form)
  }

  getAnimal(){
    return this.animals
  }
}
