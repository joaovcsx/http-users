import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  constructor(
    private _users: UsersService
  ) { }
  
  users: Array<User>;
  ngOnInit() {

  }

  getUsers() {
    this._users.getUsers().subscribe(
      (response) => {
        this.users = response;
      }
    )
  }

}