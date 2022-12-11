import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/models/heroes.model';
import { HeroService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss']
})
export class HeroEditComponent implements OnInit {

  public hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const heroId = params["id"];
      this.heroService.getById(heroId).subscribe((hero) => {
        this.hero = hero;
      });
    });
  }

}
