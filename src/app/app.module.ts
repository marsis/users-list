import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdListModule } from '@angular/material';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { OverlayContainer } from '@angular/material';

import { routes } from './routes';
import 'hammerjs';

import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { PostComponent } from './posts/post/post.component';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users.service';


@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    PostComponent,
    PostsComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdListModule,
    MaterialModule,
    routes
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.themeClass = 'deeppurple-amber';
  }
}

