import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../shared/service/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  themes: string[];

  constructor(private theming: ThemeService) {}

  ngOnInit(): void {}

  changeTheme(theme: string) {
    this.theming.update(theme);
  }
}
