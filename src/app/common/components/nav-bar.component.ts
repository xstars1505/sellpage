import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScrollSpyModule, ScrollSpyService } from 'ngx-scrollspy';
import { Ng2ScrollableDirective } from 'ng2-scrollable';
import { scrollTo } from 'ng2-utils';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, AfterViewInit {

  constructor(private scrollSpyService: ScrollSpyService) {}

  ngAfterViewInit() {

  }

  ngOnInit() {
  }

  scrollTo(selector, parentSelector, horizontal) {
    scrollTo(
        selector,       // scroll to this
        parentSelector, // scroll within (null if window scrolling)
        horizontal,     // is it horizontal scrolling
        0               // distance from top or left
    );
  }
}
