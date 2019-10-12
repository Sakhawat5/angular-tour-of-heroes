import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  [x: string]: any;

  constructor() { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  // getHeroes(): Observable<Hero[]> {
  //   // TODO: send the message _after_ fetching the heroes
  //   this.messageService.add('HeroService: fetched heroes');
  //   return of(HEROES);
  // }

}
