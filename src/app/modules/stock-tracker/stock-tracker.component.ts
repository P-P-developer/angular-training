import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-tracker',
  templateUrl: './stock-tracker.component.html',
})
export class StockTrackerComponent {
  constructor(public router: Router) {}

  /**
   * Check if the router url contains the specified route
   *
   * @param {string} route
   * @returns
   * @memberof MyComponent
   */
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
