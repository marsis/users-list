import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {


  public constructor(
    private _userService: UsersService,
    private _route: ActivatedRoute
  ) { }

  public comments: PostComment[] = [];
  public post: Post[] = [];

  private currentPostId: number;

  public ngOnInit() {
    this.getCurrentPostId()
      .subscribe(
        () => {
          this._userService.getAllPosts()
            .subscribe(
              posts => {
                this.post = posts
                  .filter(post => post.id === this.currentPostId);
              }
            );
          this._userService.getComments(this.currentPostId)
            .subscribe(comments => this.comments = comments);
        }
      );
  }

  public getCurrentPostId(): Observable<number> {
    return this._route.params
      .mergeMap(
        (params: Params) => {
          this.currentPostId = +params['postId'];
          return Observable.of(this.currentPostId);
        }
      );
  }
}