import { Component, OnInit } from '@angular/core';
import { scrollTo } from 'ng2-utils';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  showSlider;
  constructor(private _router: Router) {}

  ngOnInit() {
    this.showSlider = this._router.url.indexOf('home') > 0;
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
