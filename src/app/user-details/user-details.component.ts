import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/user';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass']
})
export class UserDetailsComponent implements OnInit {

  user: User;

  constructor( 
    private _users: UsersService,
    private _route: ActivatedRoute,
    private http: HttpClient
  ) { }
  ngOnInit(): void {
    this.viewDetailsUser()
  } 

  viewDetailsUser() {
    this._route.paramMap.subscribe(
      (response) => {
        // let x = +response.get('userId')

        this._users.getUser(+response.get('userId')).subscribe(
          (response) => {
            this.user = response;
          }
        )
      }
    )
  }

}
