import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Form1Service {

  // animals: any[] = []
  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000/animals'

  addAnimal(form: any): Observable<any> {
    // this.animals.push(form)
    return this.http.post(this.baseUrl, form)
  }

  getAnimal() {
    // return this.animals
    return this.http.get(this.baseUrl)
  }

  deleteAnimal(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
