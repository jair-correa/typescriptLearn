/*eslint-disable*/

let nome: string = "Jair";
let idade: number = 30;
let isAdulto: boolean = true;
let simbolo: symbol = Symbol("Qualquer-symbol");
//let big:bigint=10n;

//Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3, 4];
let arrayOfNumbers2: number[] = [1, 2, 3, 4];
let arrayOfStrings: Array<string> = ["a", "b", "c"];
let arrayOfStrings2: string[] = ["a", "b", "c"];

//Object
let pessoa: {
  nome: string;
  idade: number;
  isAdulto?: boolean;
  simbolo: symbol;
} = { nome: "Joao", idade: 30, isAdulto, simbolo };

//console.log(pessoa.nome);
function soma(x: number, y: number):number {//tipagem
  return x + y;
}
const soma2: (x:number, y:number) => number = (x,y)=> 1+10;