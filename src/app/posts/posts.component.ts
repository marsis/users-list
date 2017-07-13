import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

import { UsersService } from '../users.service';
import { FormControl, FormGroup } from '@angular/forms';


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
  public userName: string;
  public filteredPosts: Post[];
  private currentUserId: number;
  public options = new FormGroup({
    selector: new FormControl('1'),
    choose: new FormControl('first')

});

  public constructor(
    private _userService: UsersService,
    private _route: ActivatedRoute,
  ) {}

  public ngOnInit() {
    this.getCurrentUserId()
      .subscribe(
        () => {
          this._userService.getUserById(this.currentUserId)
            .subscribe(
              user => this.user = user);
          this._userService.getUserPosts(this.currentUserId)
            .subscribe(posts => {
              this.posts = posts;
              this.assignCopy();
            });
        }
      );
    this.setCurrentUserId();

  }

  public assignCopy(){
    this.filteredPosts = Object.assign([], this.posts);}

  public onChangeValueInFilter(value): void {
     this.filteredPosts = Object.assign([], this.posts)
      .filter(item => item.title.toLowerCase()
        .indexOf(value.toLowerCase()) > -1);
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
        this.filteredPosts.push(response);
      });
  }

  public deletePost(post: Post) {
    this._userService.deletePost(post['id'])
      .subscribe(posts => {
        this.filteredPosts = this.filteredPosts.filter(item => item !== post);
      });
  }
}
