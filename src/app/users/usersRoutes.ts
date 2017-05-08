import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';

export const childRoutes = [

 /* {
    path: '', redirectTo: '/users', pathMatch: 'full'
  },*/
  {
    path: 'users', component: UsersComponent
  }];

export default RouterModule.forChild(childRoutes);
