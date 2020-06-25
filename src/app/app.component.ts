import { Component, OnInit } from '@angular/core';
import { ThemeService } from './shared/service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angularPortfolio';

  constructor(private themeService: ThemeService) {
    this.themeService.load();
  }

  ngOnInit() {}
}
