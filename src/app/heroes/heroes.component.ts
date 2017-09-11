import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './../hero';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title: string = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
      private heroService: HeroService,
      private router: Router
  ) { }

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

  goToDetail(): void {
      this.router.navigate(['/detail', this.selectedHero.id])
  }

}
