import { Component, OnInit } from '@angular/core';
import { scrollTo } from 'ng2-utils';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() {}

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
