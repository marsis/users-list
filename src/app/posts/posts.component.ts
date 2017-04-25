import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  public posts: Post[] = [];
  public user: User;
  public formValue: {} = {};

  public title = 'new post';
  public body = '';

  private currentUserId: number;

  public constructor(
    private _userService: UsersService,
    private _route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.getCurrentUserId()
      .subscribe(
        () => {
          this._userService.getUserById(this.currentUserId)
            .subscribe(
              user => this.user = user);
          this._userService.getUserPosts(this.currentUserId)
            .subscribe(posts => this.posts = posts);
        }
      );
    this.setCurrentUserId();
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

  public setCurrentUserId(): void{
    this._userService.setCurrentUserId(this.currentUserId);
  }

 public onSubmit(formValue): void {
    formValue.userId = this.currentUserId;
    this.formValue = formValue;
    this.addPost();
    this.body = '';
  }

  public addPost(): void {
    this._userService.addPost(this.formValue)
      .subscribe(response => {
        this.posts.push(response);
      });
  }

  public deletePost(post: Post) {
    this._userService.deletePost(post['id'])
      .subscribe(posts => {
        this.posts = this.posts.filter(item => item !== post);
      });
  }
}
