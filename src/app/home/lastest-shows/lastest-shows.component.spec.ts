import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastestShowsComponent } from './lastest-shows.component';

describe('LastestShowsComponent', () => {
  let component: LastestShowsComponent;
  let fixture: ComponentFixture<LastestShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastestShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastestShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
