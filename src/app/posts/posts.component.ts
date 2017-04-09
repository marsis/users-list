import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  public constructor(
    private _userService: UsersService,
    private _route: ActivatedRoute,
  ) { }

  public posts: Post[] = [];
  public user: User[] = [];

  private currentUserId: number;

  public ngOnInit() {
    this.getCurrentUserId()
      .subscribe(
        () => {
          this._userService.getUsers()
            .subscribe(
              users => {
                this.user = users
                  .filter(user => user.id === this.currentUserId);
              }
            );

          this._userService.getPosts(this.currentUserId)
            .subscribe(posts => this.posts = posts);
        }
      );
  }

  public getCurrentUserId(): Observable<number> {
    return this._route.params
      .mergeMap(
        (params: Params) => {
          this.currentUserId = +params['userId'];
          return Observable.of(this.currentUserId);
        }
      );
  }
}
