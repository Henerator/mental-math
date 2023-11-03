import { Component, OnInit } from '@angular/core';
import { DeviceService } from '@core/device/device.service';
import { Theme } from '@core/theme/theme.enum';
import { ThemeService } from '@core/theme/theme.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  isMobile = false;
  theme!: Theme;
  themeEnum = Theme;

  constructor(
    private deviceService: DeviceService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.deviceService.isMobile$.subscribe(
      (isMobile) => (this.isMobile = isMobile)
    );
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
