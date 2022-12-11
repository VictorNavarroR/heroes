import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './components/heroComponents/hero-list/hero-list.component';
import { HeroListItemComponent } from './components/heroComponents/hero-list/hero-list-item/hero-list-item.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { ToStringPipe } from './pipes/to-string.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './components/shared/form/form.component';
import { NavComponent } from './components/core/header/nav/nav.component';
import { HeroCreateComponent } from './components/heroComponents/hero-create/hero-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DialogComponent } from './components/shared/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HeroEditComponent } from './components/heroComponents/hero-edit/hero-edit.component';
import { HeroSearchComponent } from './components/heroComponents/hero-list/hero-search/hero-search.component';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UpperCaseTextDirective } from 'src/app/directives/upper-case-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroListItemComponent,
    HeaderComponent,
    FooterComponent,
    ToStringPipe,
    FormComponent,
    NavComponent,
    HeroCreateComponent,
    LoadingComponent,
    DialogComponent,
    HeroEditComponent,
    HeroSearchComponent,
    UpperCaseTextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatPaginatorModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
