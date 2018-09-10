import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentComponentComponent } from './comment-component/comment-component.component';
import { CommentListComponentComponent } from './comment-list-component/comment-list-component.component';
import { NewCommentFormComponent } from './new-comment-form/new-comment-form.component';
import { CommentsDataService } from './comments-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponentComponent,
    CommentListComponentComponent,
    NewCommentFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CommentsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
