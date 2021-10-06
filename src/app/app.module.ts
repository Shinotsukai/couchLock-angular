import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { MoviedbService } from './moviedb.service';
import { LatestMoviesComponent } from './home/latest-movies/latest-movies.component';
import { LastestShowsComponent } from './home/lastest-shows/lastest-shows.component';
import { DiscoverComponent } from './discover/discover.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentContainerComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    WatchListComponent,
    CalendarPageComponent,
    LastestShowsComponent,
    LatestMoviesComponent,
    DiscoverComponent
    
  ],
  imports: [
    BrowserModule,
    OnsenModule,
    HttpClientModule
  ],
  entryComponents:[LoginComponent,ContentContainerComponent,HomeComponent,SearchComponent,WatchListComponent,HomeComponent,CalendarPageComponent,LastestShowsComponent, LatestMoviesComponent,DiscoverComponent],
  providers: [MoviedbService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
