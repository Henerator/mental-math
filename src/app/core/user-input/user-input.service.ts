import { Injectable } from '@angular/core';
import { KeyboardService } from '@core/keyboard/keyboard.service';
import { filter, map, merge, Observable, partition, tap } from 'rxjs';
import { keyMap } from './key-map.const';
import { userInputKeyRegex } from './regex.const';

@Injectable({
  providedIn: 'root',
})
export class UserInputService {
  constructor(private keyboardService: KeyboardService) {}

  listenFloatNumber(): Observable<string> {
    let userInput = '';

    const [number$, keys$] = partition(
      this.keyboardService.listen().pipe(
        map((event) => event.key),
        map((key) => this.mapKey(key))
      ),
      (key) => this.validateFloatNumberKey(key)
    );

    return merge(
      number$.pipe(
        filter((key) => this.validateFloatNumber(key, userInput)),
        tap((key) => (userInput += key))
      ),
      keys$.pipe(
        filter((key) => this.validateRemoveKey(key)),
        tap(() => (userInput = userInput.slice(0, -1)))
      )
    ).pipe(map(() => userInput));
  }

  listenControls(): Observable<string> {
    return this.keyboardService.listen().pipe(
      map((event) => event.key),
      filter((key) => this.validateControls(key))
    );
  }

  private validateFloatNumberKey(key: string): boolean {
    return userInputKeyRegex.floatNumberKey.test(key);
  }

  private validateFloatNumber(key: string, userInput: string): boolean {
    const value = `${userInput}${key}`;
    return userInputKeyRegex.floatNumber.test(value);
  }

  private validateRemoveKey(key: string): boolean {
    return userInputKeyRegex.delete.test(key);
  }

  private validateControls(key: string): boolean {
    return userInputKeyRegex.controls.test(key);
  }

  private mapKey(key: string): string {
    if (!keyMap.has(key)) return key;
    return keyMap.get(key) || '';
  }
}
