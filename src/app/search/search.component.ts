import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {tvShow} from '../model/tvshow';
import {MoviedbService} from '../moviedb.service'
import {
  tap,
  switchMap,
  debounceTime,
  distinctUntilChanged,
  filter
} from "rxjs/operators";

@Component({
  selector: 'ons-page[searchPage]',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  loading: boolean = false;
  tvShows$: Observable<tvShow[]>;
  private searchTerms = new Subject<string>();

  constructor( private movieService: MoviedbService) { }

  searchTv(term: string, input){

    this.searchTerms.next(term);

  }

  ngOnInit():void {
    this.tvShows$ = this.searchTerms.pipe(
      filter((term:string) => (term.length > 2)),
      tap(_ => this.loading = true),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string) => this.movieService.searchShow(term)),
      tap(_ => this.loading = false)
    )
  }

}
