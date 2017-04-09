import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { UsersComponent } from './users/users.component';


export const appRoutes: Routes = [
  {
    path: 'users', component: UsersComponent
  },
  {
    path: '', redirectTo: '/users', pathMatch: 'full'
  },
  {
    path: 'users/:userId/posts', component: PostsComponent },
  {
    path: 'posts/:postId/comments', component: CommentsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);


