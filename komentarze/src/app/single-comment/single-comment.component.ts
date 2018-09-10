import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../comment';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css']
})
export class SingleCommentComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('commentInjectedFromParent') inputComment: Comment;
  @Output() commentToBeDeleted = new EventEmitter<Comment>();

  constructor() { }

  ngOnInit() {
  }

  invokeDelete() {
    this.commentToBeDeleted.emit(this.inputComment);
  }

}
