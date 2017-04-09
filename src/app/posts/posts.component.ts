import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(
    private _userService: UsersService,
    private _route: ActivatedRoute,
  ) {


  }

  public posts: any = [];
  private currentUserId: number;
  public user: any = [];

  ngOnInit() {
    this.getCurrentUserId()
      .subscribe(
        () => {
          this._userService.getUsers()
            .subscribe(
              users => {
                this.user = users.json()
                  .filter(user => user.id === this.currentUserId);
              }
            );

          this._userService.getPosts(this.currentUserId)
            .subscribe(posts => this.posts = posts.json());
        }
      );


  }


  getCurrentUserId(): Observable<number> {
    return this._route.params
      .mergeMap(
        (params: Params) => {
          this.currentUserId = +params['userId'];
          return Observable.of(this.currentUserId);
        }
      );
  }
}
