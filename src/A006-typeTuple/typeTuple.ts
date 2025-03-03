//tuple
const dadosCliente1: [number, string] = [1, "Marlon"];
const dadosCliente2: [number, string, string] = [1, "Marlon", "Augusto"];
const dadosCliente3: [number, string, string?] = [1, "Marlon", "Austo"];
const dadosCliente4: [number, string, ...string[]] = [1, "Marlo", "Louvre"];

//dadosCliente1[0] = 100;
//dadosCliente1[1] = "João";
//dadosCliente1.pop();

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//readonly array
const array1: readonly string[] = ["Luis", "Mar"];
const array2: ReadonlyArray<string> = ["Luis", "Mar"];

console.log(array1);
console.log(array2);
