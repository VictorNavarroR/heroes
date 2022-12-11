import { Component } from '@angular/core';
import { HeroService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent {
  
  filter: string = '';

  constructor( private heroService: HeroService) { }

  onChange(): void {
    console.log(this.filter)
      this.heroService.filterByName(this.filter)
  }

}
