import { Comment } from './../comment';
import { Component, OnInit } from '@angular/core';
import { KOMENTARZ_DANE } from './../mock';
import { CommentsDataService } from './../comments-data.service';

@Component({
  selector: 'comment-list',
  templateUrl: './comment-list-component.component.html',
  styleUrls: ['./comment-list-component.component.css']
})
export class CommentListComponentComponent implements OnInit {

  comments: Comment[];
  
  
  constructor( private DaneKomentarzy: CommentsDataService) {
  }

  ngOnInit() {
   
       // this.comments = KOMENTARZ_DANE;      // stara wersja zasilanie bazporedniego z mock.
      this.comments = this.DaneKomentarzy.getKomentarze();   // nowa wersja za pomoca serwisów
  
  }

  DodajComment(param){
    this.comments.unshift(param);
  }

UsunComment(param) {

  //  var index = this.comments.findIndex(i => i.imie === param);
  //  this.comments.splice(index,1);
 
     this.comments = this.comments.filter( e => e.imie!== param);

  }

}

