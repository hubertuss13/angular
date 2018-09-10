import { Injectable } from '@angular/core';
import { KOMENTARZ_DANE } from './mock';

@Injectable()
export class CommentsDataService {

  constructor() { }

  getKomentarze() {
    
          return KOMENTARZ_DANE;
      }

}
