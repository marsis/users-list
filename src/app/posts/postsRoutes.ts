import { RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import { CommentsComponent } from '../comments/comments.component';

export const postRoutes = [
  {
    path: '', component: PostsComponent
  },

  {
    path: 'post/:postId', component: CommentsComponent
  }
];

export default RouterModule.forChild(postRoutes);
