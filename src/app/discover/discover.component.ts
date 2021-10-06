import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit, Renderer2, Output, EventEmitter, Input } from '@angular/core';
import { MoviedbService } from '../moviedb.service';

@Component({
  selector: 'ons-page[discover]',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit, AfterViewInit {

discoverShow;

  @ViewChildren('discoverCard') discoverCards: QueryList<ElementRef>;
  @Output() choiceMade = new EventEmitter();

  discoverCardArray: Array<ElementRef>;

  moveOutWidth: number; 
  shiftRequired: boolean; 
  transitionInProgress: boolean; 
  heartVisible: boolean;
  crossVisible: boolean;

  constructor(
    private movieService: MoviedbService,
    private renderer: Renderer2
  ) { }

  userClickedButton(event, heart) {
    event.preventDefault();
    if (!this.discoverShow.length) return false;
    if (heart) {
      this.discoverCardArray[0].nativeElement.style.transform = 'translate(' + this.moveOutWidth + 'px, -100px) rotate(-30deg)';
      this.toggleChoiceIndicator(false,true);
    } else {
      this.discoverCardArray[0].nativeElement.style.transform = 'translate(-' + this.moveOutWidth + 'px, -100px) rotate(30deg)';
      this.toggleChoiceIndicator(true,false);
    };
    this.shiftRequired = true;
    this.transitionInProgress = true;
  };

  toggleChoiceIndicator(cross, heart) {
    this.crossVisible = cross;
    this.heartVisible = heart;
  };

  handleShift() {
    this.transitionInProgress = false;
    this.toggleChoiceIndicator(false,false)
    if (this.shiftRequired) {
      this.shiftRequired = false;
      this.discoverShow.shift();
    };
  };

  handlePan(event) {

    if (event.deltaX === 0 || (event.center.x === 0 && event.center.y === 0) || !this.discoverShow.length) return;

    if (this.transitionInProgress) {
      this.handleShift();
    }

    this.renderer.addClass(this.discoverCardArray[0].nativeElement, 'moving');

    if (event.deltaX > 0) { this.toggleChoiceIndicator(false,true) }
    if (event.deltaX < 0) { this.toggleChoiceIndicator(true,false) }

    let xMulti = event.deltaX * 0.03;
    let yMulti = event.deltaY / 80;
    let rotate = xMulti * yMulti;

    this.renderer.setStyle(this.discoverCardArray[0].nativeElement, 'transform', 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)');

    this.shiftRequired = true;

  };

  handlePanEnd(event) {

    this.toggleChoiceIndicator(false,false);

    if (!this.discoverShow.length) return;

    this.renderer.removeClass(this.discoverCardArray[0].nativeElement, 'moving');

    let keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;
    if (keep) {

      this.renderer.setStyle(this.discoverCardArray[0].nativeElement, 'transform', '');
      this.shiftRequired = false;

    } else {

      let endX = Math.max(Math.abs(event.velocityX) * this.moveOutWidth, this.moveOutWidth);
      let toX = event.deltaX > 0 ? endX : -endX;
      let endY = Math.abs(event.velocityY) * this.moveOutWidth;
      let toY = event.deltaY > 0 ? endY : -endY;
      let xMulti = event.deltaX * 0.03;
      let yMulti = event.deltaY / 80;
      let rotate = xMulti * yMulti;

      this.renderer.setStyle(this.discoverCardArray[0].nativeElement, 'transform', 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)');

      this.shiftRequired = true;

      this.emitChoice(!!(event.deltaX > 0), this.discoverShow[0]);
    }
    this.transitionInProgress = true;
  };

  emitChoice(heart, show) {
    this.choiceMade.emit({
      choice: heart,
      payload: show
    })
  };

  ngOnInit() {

  }

  ngAfterViewInit(){
    this.movieService.getShowingToday().subscribe((data) =>{
      console.log(data);
      this.discoverShow = data['results']
    })

    console.log(this.discoverShow)
    this.moveOutWidth = document.documentElement.clientWidth * 1.5;
    this.discoverCardArray = this.discoverCards.toArray();
    this.discoverCards.changes.subscribe(()=>{
      this.discoverCardArray = this.discoverCards.toArray();
    })

  }

}
