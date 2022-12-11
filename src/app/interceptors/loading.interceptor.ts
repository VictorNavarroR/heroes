import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../services/loading-service.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor( private loadingSvc: LoadingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingSvc.show();
    return next.handle(request).pipe(
      finalize( () =>  this.loadingSvc.hide() )
    );
  }
}
