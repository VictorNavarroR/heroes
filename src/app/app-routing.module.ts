import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroCreateComponent } from './components/heroComponents/hero-create/hero-create.component';
import { HeroEditComponent } from './components/heroComponents/hero-edit/hero-edit.component';
import { HeroListComponent } from './components/heroComponents/hero-list/hero-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'hero-list', pathMatch: 'full' },
  { path: 'hero-list', component: HeroListComponent },
  { path: 'hero-create', component: HeroCreateComponent, data: { type:'create' } },
  { path: 'hero-edit/:id', component: HeroEditComponent, data: { type:'edit' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
