import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions, Http, HttpModule } from '@angular/http';
import { MdListModule } from '@angular/material';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { OverlayContainer } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { routes } from './routes';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentification.service';

import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { DragAndDropExample, DragMe, DropOverMe } from './dragndrop/dragndrop.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DragAndDropExample,
    DragMe,
    DropOverMe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdListModule,
    MaterialModule,
    UsersModule,
    PostsModule,
    routes

  ],

  providers: [
    UsersService,
    AuthService,
    AuthenticationService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions

  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.themeClass = 'deeppurple-amber';
  }
}

