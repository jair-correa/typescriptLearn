type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = { nome: "Luiz", sobrenome: "Fagundes", idade: 90 };
console.log(pessoa.nome);

export { pessoa };
