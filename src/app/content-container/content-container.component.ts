import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { SearchComponent } from '../search/search.component';
import { WatchListComponent } from '../watch-list/watch-list.component';
import { CalendarPageComponent } from '../calendar-page/calendar-page.component';
import { DiscoverComponent } from '../discover/discover.component';

@Component({
  selector: 'ons-page[content-container]',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit {

  constructor() { }

  homePage = HomeComponent;
  searchPage = SearchComponent;
  watchPage = WatchListComponent;
  calendarPage= CalendarPageComponent;
  discoverPage = DiscoverComponent;

  ngOnInit() {
  }

}
