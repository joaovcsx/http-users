import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return new Observable<Array<User>>(
      subscriber => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        this.http.get(url).subscribe(response => {
          let users = new Array<User>();
          users = (response as Array<User>);
          subscriber.next(users);
        })
      }
    )
  };

  getUser(id: number) {
    return new Observable<User>(
      subscriber => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        this.http.get(url).subscribe(response => {
          let user = new User();
          user = (response as User);
          subscriber.next(user);
        })
      }
    )
  }
}
