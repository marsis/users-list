import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public constructor(
    private _userService: UsersService,
    private _route: ActivatedRoute
  ) {
  }

  public comments: PostComment[] = [];
  private currentPostId: number;
  public post: Post[] = [];

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

  getCurrentPostId(): Observable<number> {
    return this._route.params
      .mergeMap(
        (params: Params) => {
          this.currentPostId = +params['postId'];
          return Observable.of(this.currentPostId);
        }
      );
  }

}