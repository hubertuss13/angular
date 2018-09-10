import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManageCommentsListComponent } from './manage-comments-list/manage-comments-list.component';
import { SingleCommentComponent } from './single-comment/single-comment.component';
import { NewCommentComponent } from './new-comment/new-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageCommentsListComponent,
    SingleCommentComponent,
    NewCommentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
