import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { environment } from "../../environments/environment"
import { Hero } from '../models/heroes.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  heroesEndPoint: string = environment.heroesEndpoint;
  heroes$ = new BehaviorSubject<Hero[]>([]);
  heroesClone$ = new BehaviorSubject<Hero[]>([]);

  constructor(private http: HttpClient ) { }

  getAll(): void {
    const heroes: Observable<Hero[]> = this.http.get<Hero[]>(this.heroesEndPoint);
    heroes.subscribe( heroes => this.heroes$.next(heroes) );
  }

  getById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesEndPoint}/${id}`);
  }

  create(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesEndPoint, hero);
  }

  update(id: string, hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.heroesEndPoint}/${id}`, hero);
  }

  delete(id:string): void {
    this.http.delete(`${this.heroesEndPoint}/${id}`)
    .subscribe( res => res && this.getAll());
  }

  filterByName(name: string): void {
    if(this.heroesClone$.value.length === 0) {
      this.heroesClone$.next([...this.heroes$.value]);
    }

    const filteredHeroes: Hero[] = this.heroesClone$.value.filter( hero => hero.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()) );

    this.heroes$.next(filteredHeroes);
  }
}
