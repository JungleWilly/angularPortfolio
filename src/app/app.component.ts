import { Component, OnInit } from '@angular/core';
import { ThemeService } from './shared/service/theme.service';
import { RouterOutlet } from '@angular/router';
import {
  // slider,
  // transformer,
  // fader,
  // stepper,
  slideInAnimation,
} from './shared/animations/route-animations';

import { headerAnim } from './shared/animations/header-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // fader,
    //slider,
    //transformer,
    //stepper,
    slideInAnimation,
  ],
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {
    this.themeService.load();
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  ngOnInit() {}
}
