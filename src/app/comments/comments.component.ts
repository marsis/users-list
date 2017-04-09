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

  constructor(
    private _userService: UsersService,
    private _route: ActivatedRoute
  ) {
  }

  public comments: any = [];
  private currentUserId: number;
  private currentPostId: number;
  public post: any = [];

  ngOnInit() {


    this.getCurrentPostId()
      .subscribe(
        () => {
          this._userService.getAllPosts()
            .subscribe(
              posts => {
                this.post = posts.json()
                  .filter(post => post.id === this.currentPostId);
              }
            );
          this._userService.getComments(this.currentPostId)
            .subscribe(comments => this.comments = comments.json());
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