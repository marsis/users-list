import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { CommentsComponent } from '../comments/comments.component';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { postRoutes } from './postsRoutes';
import { AuthService } from '../auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,

    RouterModule.forChild(postRoutes)
  ],

  declarations: [
    PostsComponent,
    PostComponent,
    CommentsComponent
  ]
})
export class PostsModule { }
