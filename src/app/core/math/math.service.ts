export class MathService {
  static getRandomInt(min: number, max: number): number {
    return Math.round(Math.random() * (max - min)) + min;
  }

  static toFixedNoRounding(value: number, precision = 1): string {
    const factor = Math.pow(10, precision);
    const fixedValue = Math.floor(value * factor) / factor;
    return fixedValue.toString();
  }
}
