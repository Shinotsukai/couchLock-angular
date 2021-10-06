import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../moviedb.service';
import { LastestShowsComponent } from './lastest-shows/lastest-shows.component';
import { LatestMoviesComponent } from './latest-movies/latest-movies.component';

@Component({
  selector: 'ons-page[homePage]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    private movieService: MoviedbService,
  ) { }

  latestTv = LastestShowsComponent;
  latestMovie = LatestMoviesComponent;

  ngOnInit() {


  }

}
