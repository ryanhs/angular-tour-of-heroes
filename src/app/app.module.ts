import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeroService } from './hero.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: 'heroes', component: HeroesComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
