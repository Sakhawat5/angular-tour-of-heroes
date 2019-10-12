import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  [x: string]: any;

  constructor( private http: HttpClient, private messageService: MessageService) 
  {

  }

    

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  
  // getHeroes(): Observable<Hero[]> {
  //   return of(HEROES);
  // }

  /** GET heroes from the server */
  // getHeroes(): Observable<Hero[]> {
  //   // TODO: send the message _after_ fetching the heroes
  //   this.messageService.add('HeroService: fetched heroes');
  //   return of(HEROES);
  // }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  // HTTP Service Start
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private heroesUrl = 'api/heroes';  // URL to web api

  // getHeroes(): Observable<Hero[]> {
  //   return of(HEROES);
  // }

  /** GET heroes from the server */
  getHeroes (): Observable<Hero[]> {
    //this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  //Http Service end

}
