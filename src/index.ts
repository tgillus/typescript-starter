import 'source-map-support/register';

export function add(number1: number, number2: number): number {
  return number1 + number2;
}

export function throwError(): void {
  throw new Error('throwing an error');
}
