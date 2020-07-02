import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../shared/service/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  themes: string[];
  selectedTheme: string;

  constructor(private theming: ThemeService) {}

  ngOnInit(): void {
    if (localStorage.getItem('prefers-color')) {
      this.selectedTheme = localStorage.getItem('prefers-color');
    }
  }

  changeTheme() {
    this.theming.update(this.selectedTheme);
  }
}
