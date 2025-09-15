import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  // private users: any[] = [];

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000/users'

  addUser(user: any) : Observable<any>{
    debugger
    // this.users.push(user);
    return this.http.post(this.baseUrl, user)
  }

  getUsers() {
    // return this.users;
    return this.http.get(this.baseUrl)
  }
}
