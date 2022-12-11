import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Hero } from 'src/app/models/heroes.model';
import { HeroService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit, OnDestroy {

  @Input() public hero?: Hero;

  public heroForm!: FormGroup;
  public submitted: boolean = false;
  private actualRoute: Observable<Data> = this.route.data;
  public requestType: string = '';
  public heroSubscription: Subscription | undefined;
  public actualRouteSubscription: Subscription | undefined;

  constructor(
    private form: FormBuilder, 
    private route: ActivatedRoute, 
    private router: Router, 
    private heroService: HeroService
    ) {}

  ngOnInit(): void {

     this.actualRouteSubscription = this.actualRoute.subscribe( (data) => this.requestType = data['type']);
     
     this.heroForm = this.form.group({
        name: [this.hero?.name ?? '', [Validators.required]],
        humanName: [this.hero?.humanName ?? '', [Validators.required]], 
        image: this.hero?.image ?? '',
        powers: this.hero?.powers.join(',') ?? '',
        history: this.hero?.history ?? ''
     })

  }

  ngOnDestroy(): void {
    this.actualRouteSubscription?.unsubscribe();
    this.heroSubscription?.unsubscribe();
  }

  public onSubmit(): void {
    if( this.heroForm.valid ) {
      const { name, humanName, image, powers, history } = this.heroForm.value;
      if(this.requestType === 'create') {
        this.heroService.create({
          name,
          humanName,
          image,
          powers: powers.split(','),
          history
        } as Hero).subscribe( (res: unknown) => {
          if(res) {
            this.heroService.getAll();
            this.router.navigateByUrl('/');
          }
        });
      }
      if(this.requestType === 'edit') {
        this.heroService.update(this.hero?.id as string, {
          name,
          humanName,
          image,
          powers: powers.split(','),
          history
        } as Hero).subscribe( (res: unknown) => {
          if(res) {
            this.heroService.getAll();
            this.router.navigateByUrl('/');
          }
        });
      }
    }
  }

}
