import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '', loadChildren: './users/users.module#UsersModule'
  },
  {
    path: 'user/:userId', loadChildren: './posts/posts.module#PostsModule'
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
