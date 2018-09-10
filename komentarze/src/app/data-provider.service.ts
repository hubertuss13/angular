import { Injectable } from '@angular/core';
import { ZRODLO_DANYCH } from './mock-data-source';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class DataProviderService {

  constructor() { }

  getCommentsFromSource() {
    return ZRODLO_DANYCH;
  }
}
