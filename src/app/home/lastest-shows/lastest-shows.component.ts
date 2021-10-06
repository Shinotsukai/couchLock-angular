import { Component, OnInit } from '@angular/core';
import { MoviedbService } from 'src/app/moviedb.service';

@Component({
  selector: 'ons-page[latestShow]',
  templateUrl: './lastest-shows.component.html',
  styleUrls: ['./lastest-shows.component.css']
})
export class LastestShowsComponent implements OnInit {

  airingShow;

  constructor(
    private movieService: MoviedbService,
  ) { }

  ngOnInit() {
    this.movieService.getShowingToday().subscribe((data) =>{
      console.log(data);
      this.airingShow = data['results']
    })

    console.log(this.airingShow)
  }

}
