import { Component } from '@angular/core';
import { UsersService } from './services/users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(
    private _users: UsersService
  ) { }

  getUsers() {
    this._users.getUsers()
  }
}
