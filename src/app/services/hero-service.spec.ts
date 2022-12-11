import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeroService } from './hero-service.service';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService]
    });
  });

  it('hero service should be initialized', inject([HeroService], (heroService: HeroService) => {
    expect(heroService).toBeTruthy();
  }));

  it('should get all heroes and insert them to heroes subject', () => {

  })
});