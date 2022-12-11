import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hero } from 'src/app/models/heroes.model';
import { HeroService } from 'src/app/services/hero-service.service';
import { PageEvent } from '@angular/material/paginator'

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit, OnDestroy {
  
  private heroList$!: Subscription;
  heroesList: Hero[] = [];
  heroSlice: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    if(this.heroService.heroes$.value.length === 0) {
      this.heroService.getAll();
    }
    
    this.heroList$ = this.heroService.heroes$
    .subscribe( (data) => {
      this.heroesList = data;
      this.heroSlice = this.heroesList.slice(0, 8)
    });
  }

  ngOnDestroy(): void {
    this.heroList$.unsubscribe();
  }

  OnPageChange(event: PageEvent) {

    const startIndex = event.pageIndex * event.pageSize
    let endIndex = startIndex + event.pageSize

    if( endIndex > this.heroesList.length ) {
      endIndex = this.heroesList.length
    }

    this.heroSlice = this.heroesList.slice(startIndex, endIndex)

  }

}
