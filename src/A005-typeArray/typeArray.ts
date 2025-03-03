//Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((acc, valor) => acc + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toLocaleUpperCase()); //ocaleUpperCase()); //ocaleUpperCase()); //ocaleUpperCase()); //
}
const result = multiplicaArgs(1, 2, 3);
const concatenated = concatenaString("Hello", " ", "World");
const upper = concatenaString("a", "b", "c");

console.log(result);
console.log(concatenated);
console.log(upper);
