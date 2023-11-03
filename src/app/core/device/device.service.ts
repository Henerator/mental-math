import { Inject, Injectable } from '@angular/core';
import { windowToken } from '@core/window/window.token';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  Observable,
  startWith,
} from 'rxjs';
import { minDesktopWidth } from './device-size.const';
import { DeviceSize } from './device-size.interface';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  isMobile$: Observable<boolean>;

  constructor(
    @Inject(windowToken)
    private readonly window: Window
  ) {
    const resize$ = fromEvent(this.window, 'resize').pipe(
      map<Event, DeviceSize>(() => this.getWindowSize()),
      startWith(this.getWindowSize()),
      debounceTime(300)
    );

    this.isMobile$ = resize$.pipe(
      map<DeviceSize, boolean>((size) => size.width < minDesktopWidth),
      distinctUntilChanged()
    );
  }

  private getWindowSize(): DeviceSize {
    return {
      width: this.window.innerWidth,
      height: this.window.innerHeight,
    };
  }
}
