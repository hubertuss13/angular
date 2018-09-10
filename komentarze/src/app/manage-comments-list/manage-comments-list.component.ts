import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { Comment } from '../comment';

@Component({
  selector: 'app-manage-comments-list',
  templateUrl: './manage-comments-list.component.html',
  styleUrls: ['./manage-comments-list.component.css']
})
export class ManageCommentsListComponent implements OnInit {

  comments: Comment[];
  dataFromModel: Array<Comment>;

  constructor(private dataInjected: DataProviderService) { }

  ngOnInit() {
    this.comments = this.dataInjected.getCommentsFromSource();
  }

  deleteCommentFromList(param) {
    this.comments = this.comments.filter( e => (e !== param) );
  }

  addCommentToList(param) {
    this.comments.push(param);
  }

  fetchData() {
    this.dataFromModel = this.dataInjected.getCommentsFromSource();
  }

}
