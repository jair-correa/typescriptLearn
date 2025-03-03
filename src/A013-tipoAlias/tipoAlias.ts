type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = "RED" | "GREEN" | "BLUE";
type CorCMYB = "CIANO" | "MAGENTA" | "YELLOW" | "BLACK";
type CorPreferida = CorRGB | CorCMYB;

const pessoa: Pessoa = {
  nome: "Joao",
  idade: 30,
  salario: 1000,
  corPreferida: "CIANO",
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, "RED"));
console.log(pessoa);
