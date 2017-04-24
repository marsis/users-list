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
import { UsersService } from './users.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';


@NgModule({
  declarations: [
    AppComponent,
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
    UsersService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.themeClass = 'deeppurple-amber';
  }
}

