import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loading-service.service';

@Component({
  selector: 'app-loading',
  template:`
    <div class="loading-wrapper" *ngIf="isLoading$ | async">
      <div class="lds-circle">
        <div></div>
      </div>
    </div>
    `,
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {

  isLoading$ = this.loadingSvc.isLoading$;

  constructor( private loadingSvc: LoadingService ) {}


}
