import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  public users: User[] = [];

  public constructor( private _userService: UsersService) { }

  public ngOnInit(): void {
    this._userService.getUsers()
      .subscribe( (users) => this.users =users )
  }

}

