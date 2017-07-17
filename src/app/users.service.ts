import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UsersService {

  private apiURL = 'https://jsonplaceholder.typicode.com';
  public currentUserId: number;
  public constructor(
    private _http: Http
  ) { }


  public getJSON<T>(url: string): Observable<T> {
    return this._http.get(`${this.apiURL}${url}`)
      .map((res) => res.json());
  }

  public getUsers(): Observable<User[]> {
    return this.getJSON('/users');
  }

  public getUserById(id): Observable<User> {
    return this.getJSON(`/users/${id}`);
  }

  public getUserPosts(id): Observable<Post[]> {
    return this.getJSON(`/posts?userId=${id}`);
  }

  public getPostComments(postId): Observable<PostComment[]> {
    return this.getJSON(`/posts/${postId}/comments`);
  }

  public addPost(formValue): Observable<Post> {
    return this._http.post(`${this.apiURL}/posts`, formValue)
      .map(post => post.json());
  }

  public deletePost(postId): Observable<Post> {
    return this._http.delete(`${this.apiURL}/posts/${postId}`)
      .map(post => post.json());
  }

  public setCurrentUserId(id): void{
    this.currentUserId = id;
  }

  public getCurrentUserId(): number{
    return this.currentUserId;
  }
}
