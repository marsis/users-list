import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

/*export const appRoutes: Routes = [

  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  { path: '', component: HomeComponent, canActivate: [AuthService] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },

  {
    path: 'users', loadChildren: './users/users.module#UsersModule'
  }
  /!*{
    path: 'user/:userId',
    canActivate: [AuthService],
    loadChildren: './posts/posts.module#PostsModule'
  }*!/
];*/

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthService] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
