import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from './../comment';

@Component({
  selector: 'new-comment-form',
  templateUrl: './new-comment-form.component.html',
  styleUrls: ['./new-comment-form.component.css']
})


export class NewCommentFormComponent implements OnInit {

  @Output() commentCreated = new EventEmitter<Comment>();
  @Output() commentDelete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  AddComment(imie:string, komentarz:string) {
    this.commentCreated.emit(new Comment(imie,komentarz));
  }

  DeleteComment(imie:string) {
    this.commentDelete.emit(imie);
  }


}



