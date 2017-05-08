import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [

  {
    path: '', component: LoginComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },

  {
    path: 'users', loadChildren: './users/users.module#UsersModule'
  },
  {
    path: 'user/:userId',
    canActivate: [AuthService],
    loadChildren: './posts/posts.module#PostsModule'
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
