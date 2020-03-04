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
    const url = 'https://jsonplaceholder.typicode.com/users';
    this.http.get(url).subscribe(response => {
      console.log(response)
    });
    // return new Observable<User>(
    //   subscriber => {
    //     const url = 'https://jsonplaceholder.typicode.com/users';
    //     this.http.get(url).subscribe(response => {
    //       let users = new Array<User>();
    //         users = response['']
    //         subscriber.next();
    //     })
    //   }
    // )
  };
}
