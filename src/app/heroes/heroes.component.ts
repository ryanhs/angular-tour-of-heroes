import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title: string = 'Tour of Heroes';
  heroService: HeroService;
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private hs: HeroService) {
    this.heroService = hs;
  }

  getHeroes() {
    //   this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
      this.selectedHero = hero;
  }

}
