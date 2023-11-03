import { Inject, Injectable } from '@angular/core';
import { windowToken } from '@core/window/window.token';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage = this.window.localStorage;

  constructor(
    @Inject(windowToken)
    private readonly window: Window
  ) {}

  setObject(name: string, value: object): void {
    const valueString = JSON.stringify(value);
    this.storage.setItem(name, valueString);
  }

  getObject(name: string): object | null {
    const valueString = this.storage.getItem(name);
    return valueString ? JSON.parse(valueString) : null;
  }

  setArray(name: string, value: unknown[]): void {
    const valueString = JSON.stringify(value);
    this.storage.setItem(name, valueString);
  }

  getArray<T>(name: string): T[] | null {
    const valueString = this.storage.getItem(name);
    return valueString ? JSON.parse(valueString) : null;
  }
}
