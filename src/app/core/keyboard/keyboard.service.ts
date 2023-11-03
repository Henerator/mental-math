import { Inject, Injectable } from '@angular/core';
import { windowToken } from '@core/window/window.token';
import { fromEvent, map, merge, Observable, Subject } from 'rxjs';

import { KeyEvent } from './key-event.interface';
import { KeyEvents } from './key-events.enum';

@Injectable({
  providedIn: 'root',
})
export class KeyboardService {
  private keyDownEvents$: Observable<KeyboardEvent>;
  private customKeyEventSubject = new Subject<KeyEvent>();

  constructor(
    @Inject(windowToken)
    private readonly window: Window
  ) {
    this.keyDownEvents$ = fromEvent<KeyboardEvent>(
      this.window,
      KeyEvents.keydown
    );
  }

  listen(): Observable<KeyEvent> {
    return merge(
      this.keyDownEvents$.pipe(
        map((event: KeyboardEvent) => {
          const { key, code } = event;
          return { key, code };
        })
      ),
      this.customKeyEventSubject
    );
  }

  emitCustomEvent(event: KeyEvent): void {
    this.customKeyEventSubject.next(event);
  }
}
