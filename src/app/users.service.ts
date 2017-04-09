import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';


@Injectable()
export class UsersService {

  public constructor(
    private _http: Http
  ) { }

  public getUsers(): Observable<User[]> {
    return this._http.get('https://jsonplaceholder.typicode.com/users')
      .map((user) => user.json());
  }

  public getAllPosts(): Observable<Post[]> {
    return this._http.get('https://jsonplaceholder.typicode.com/posts')
      .map(allPosts => allPosts.json());
  }

  public getPosts(id): Observable<Post[]> {
    return this._http.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .map(posts => posts.json());
  }

  public getComments(postId): Observable<PostComment[]> {
    return this._http.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .map(comments => comments.json());
  }
}