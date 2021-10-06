import { Component, OnInit } from '@angular/core';
import { MoviedbService } from 'src/app/moviedb.service';

@Component({
  selector: 'ons-page[lastestMovie]',
  templateUrl: './latest-movies.component.html',
  styleUrls: ['./latest-movies.component.css']
})
export class LatestMoviesComponent implements OnInit {
  inCinema;

  constructor(
    private movieService: MoviedbService,
  ) { }

  ngOnInit() {
    this.movieService.getInCinema().subscribe((data) =>{
      console.log(data);
      this.inCinema = data['results']
    })

    console.log(this.inCinema)

  }

}
