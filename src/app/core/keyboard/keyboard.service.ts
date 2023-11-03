import { Inject, Injectable } from '@angular/core';
import { windowToken } from '@core/window/window.token';
import { fromEvent, map, Observable } from 'rxjs';

import { KeyEvent } from './key-event.interface';
import { KeyEvents } from './key-events.enum';

@Injectable({
  providedIn: 'root',
})
export class KeyboardService {
  constructor(
    @Inject(windowToken)
    private readonly window: Window
  ) {}

  listen(): Observable<KeyEvent> {
    return fromEvent<KeyboardEvent>(this.window, KeyEvents.keydown).pipe(
      map((event: KeyboardEvent) => {
        const { key, code } = event;
        return { key, code };
      })
    );
  }
}
