import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthenticationService } from './authentification.service';


@Injectable()
export class UsersService {

  private apiURL = 'https://jsonplaceholder.typicode.com';
  public currentUserId: number;
  public constructor(
    private _http: Http,
    private authenticationService: AuthenticationService
  ) { }


  public getJSON<T>(url: string, options?: RequestOptions): Observable<T> {
    return this._http.get(`${this.apiURL}${url}`)
      .map((res) => res.json());
  }

  public getUsers() {
    // add authorization header with jwt token
    let headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
    let options = new RequestOptions({ headers: headers });
    //return this.getJSON('/users', options);

    // get users from api
    return this._http.get('/api/users', options)
      .map((response) => response.json());
  }

/*
  getUsers(): Observable<User[]> {
    // add authorization header with jwt token
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    // get users from api
    return this.http.get('/api/users', options)
      .map((response: Response) => response.json());
  }*/


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
