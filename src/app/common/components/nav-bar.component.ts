import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  showSlider: boolean = true;
  constructor(private _router: Router) {
    this._router.events.filter(event => event instanceof NavigationEnd)
      .subscribe(
        event => {
          this.showSlider = this._router.url === '/';
        }
      )
  }

  ngOnInit() {
  }

  scrollTo(navigation) {
    navigation.scrollIntoView( {behavior: 'smooth', block: 'start', inline: 'start'});

  }
}
