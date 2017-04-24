import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  public users: User[] = [];

  public constructor(
    private _userService: UsersService, private _router: Router
  ) { }

  public ngOnInit(): void {
    this._userService.getUsers()
      .subscribe((users) => this.users = users);
  }
  public gotoPosts(id) {
    this._router.navigate(['/user/', id]);
  }
}

