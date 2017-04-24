import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { UsersComponent } from './users.component';
import { childRoutes } from './usersRoutes';
import { UserComponent } from './user/user.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(childRoutes)
  ],
  declarations: [
    UsersComponent,
    UserComponent
  ]
})
export class UsersModule { }
