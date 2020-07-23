import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemeService } from './shared/service/theme.service';
import {
  trigger,
  transition,
  query,
  style,
  animate,
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './shared/service/sidenav.service';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition(
        'HomePage <=> ProjectsPage, HomePage <=> AboutPage, HomePage <=> ContactPage, ProjectsPage <=> AboutPage, ProjectsPage <=> ContactPage, AboutPage <=> ContactPage',
        [
          style({ height: '!' }),
          query(':enter', style({ opacity: 0 })),
          query(
            ':enter, :leave',
            style({
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
            })
          ),

          query(':leave', [animate('0.4s ease', style({ opacity: 0 }))]),
          query(':enter', [animate('0.4s ease', style({ opacity: 1 }))]),
        ]
      ),
    ]),
  ],
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(
    private themeService: ThemeService,
    private sidenavService: SidenavService
  ) {
    var firebaseConfig = {
      apiKey: 'AIzaSyBIFhRHX_v0c9HbXuGPnB_1mlXSNQD3aAg',
      authDomain: 'guillaumeportfolio-c398d.firebaseapp.com',
      databaseURL: 'https://guillaumeportfolio-c398d.firebaseio.com',
      projectId: 'guillaumeportfolio-c398d',
      storageBucket: 'guillaumeportfolio-c398d.appspot.com',
      messagingSenderId: '127419266272',
      appId: '1:127419266272:web:35cf95da0d079e94b18c85',
      measurementId: 'G-M9ZXFLLVHT',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

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

  ngAfterViewInit(): void {
    this.sidenavService.setSideNav(this.sidenav);
  }

  toggleSideNav() {
    this.sidenavService.toggle();
  }
}
