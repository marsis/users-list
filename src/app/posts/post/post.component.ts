import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.css']
})
export class PostComponent {

  @Input()
  public post: Post;

  @Output()
  public deletePost = new EventEmitter();

  public constructor( private _router: Router) { }

  public onDeletePost() {
  this.deletePost.emit();
  }

  public gotoComments(id) {
    this._router.navigate(['post/', id]);
  }
}

