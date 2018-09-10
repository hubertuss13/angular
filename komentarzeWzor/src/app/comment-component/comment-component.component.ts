import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { Comment } from './../comment';

@Component({
  selector: 'comment',
  templateUrl: './comment-component.component.html',
  styleUrls: ['./comment-component.component.css']
})
export class CommentComponentComponent implements OnInit {

@Input('komentarz')  comment: Comment;
@Output() UsunComment = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  Usun() {
      this.UsunComment.emit(this.comment.imie);
  }

}
