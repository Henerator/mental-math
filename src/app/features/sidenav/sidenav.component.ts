import { Component, OnInit } from '@angular/core';
import { Theme } from '@core/theme/theme.enum';
import { ThemeService } from '@core/theme/theme.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  theme!: Theme;
  themeEnum = Theme;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.themeChange$.subscribe((theme) => (this.theme = theme));
  }

  onChangeThemeClick(): void {
    if (this.theme === Theme.dark) {
      this.themeService.setLightTheme();
      return;
    }

    this.themeService.setDarkTheme();
  }
}
