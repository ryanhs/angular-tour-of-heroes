import { Injectable } from '@angular/core';
import { Hero, MOCK_HEROES } from './hero';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(MOCK_HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    // Simulate server latency with 2 second delay
    return new Promise(resolve => {
        setTimeout(() => resolve(this.getHeroes()), 2000)
    });
  }
}
