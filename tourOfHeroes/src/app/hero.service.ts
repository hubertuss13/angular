import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES_DATA } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageProvider: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageProvider.add('HeroService: heroes data successfully fetched from the server');
    return of(HEROES_DATA);
  }

  getHero(id: number): Observable<Hero> {
    this.messageProvider.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES_DATA.find(hero => hero.id === id) );
  }

}
