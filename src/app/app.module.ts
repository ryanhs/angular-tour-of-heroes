import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeroService } from './hero.service';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    LandingComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [LandingComponent]
})
export class AppModule { }
