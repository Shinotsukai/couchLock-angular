import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastestShowsComponent } from './lastest-shows/lastest-shows.component';
import { LatestMoviesComponent } from './latest-movies/latest-movies.component';



@NgModule({
  declarations: [LastestShowsComponent, LatestMoviesComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }