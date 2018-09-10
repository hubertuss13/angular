import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  copiedHeroes: Array<Hero>;

  constructor(private heroProvider: HeroService) {
   }

  ngOnInit() {
    this.getHeroesFromService();
  }

  getHeroesFromService(): void {
    this.heroProvider.getHeroes().subscribe(emittedHeroesArray => this.copiedHeroes = emittedHeroesArray);
  }

}
