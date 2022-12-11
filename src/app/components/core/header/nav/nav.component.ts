import { Component } from '@angular/core';
import { nav } from 'src/app/models/nav.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  nav: nav[] = [
    { name: 'Home', slug: 'home', url:'/hero-list' },
    { name: 'Create hero', slug: 'create-hero', url:'/hero-create' },
  ]; 
  

}
