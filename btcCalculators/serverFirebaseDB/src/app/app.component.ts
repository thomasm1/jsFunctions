import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
// import 'lodash';

// declare var _: any;

@Component({
  selector: 'tm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tm';
  showLoadingIndicator = true;

  constructor(private _router: Router) {
    this._router.events.subscribe((routerEvent: Event) => {
      if(routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if(routerEvent instanceof NavigationEnd || 
        routerEvent instanceof NavigationCancel || 
        routerEvent instanceof NavigationError) {
        this.showLoadingIndicator = false;
      }
    });

    const array = [1,2,3];
    // console.log(_.shuffle(array)); 
  }
}
