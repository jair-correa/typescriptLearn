let x = 10;
x = 0b1010;
const y = 10;
//let a = 100 as const;
const a = 100;

const pessoa = {
  nome: "João" as const,
  idade: 30,
  isAdulto: true,
  simbolo: Symbol(),
};

function escolhaCor(cor: "Vermelho" | "Amarelo" | "Azul"): string {
  return cor;
}
console.log(escolhaCor('Azul'));

export default 1;
