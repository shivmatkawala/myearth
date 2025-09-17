import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  // private users: any[] = [];

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000/users'

  addUser(user: any): Observable<any> {
    debugger
    // this.users.push(user);
    return this.http.post(this.baseUrl, user)
  }

  getUsers() {
    // return this.users;
    return this.http.get(this.baseUrl)
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map(users => {
        const user = users.find(
          u => u.email === email && u.password === password
        );
        return user ? user : null;
      })
    );
  }

}
