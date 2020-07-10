import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../service/theme.service';
import { headerAnim } from '../../animations/header-animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [headerAnim],
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
