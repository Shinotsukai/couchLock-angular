import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {tvShow} from './model/tvshow'


@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  endPoint: string = 'https://api.themoviedb.org/3/search/tv?api_key=0585c1339a36975653a725f4cedb4438&language=en-US&query=';

  constructor(
    private http: HttpClient
  ) { }

  searchShow(term:string):Observable<tvShow[]> {


    let url = `${this.endPoint}${term}`;
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<tvShow[]>(url)

    .pipe(
      map(res => res['results']),
      catchError(this.handleError<tvShow[]>('results',[]))
    )

  }


    getShowingToday(){
      return this.http.get('https://api.themoviedb.org/3/tv/airing_today?api_key=0585c1339a36975653a725f4cedb4438&language=en-US')
    }

    getInCinema(){
      return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=0585c1339a36975653a725f4cedb4438&language=en-US')
    }

    private handleError<T>(operation = 'operation', result?:T){
      return(error:any): Observable<T> =>{
        console.log(`failed: ${error.message}`);
        return of(result as T);
      };
    }

}
