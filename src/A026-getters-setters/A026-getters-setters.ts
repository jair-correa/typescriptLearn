export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  set cpf(cpf: string) {
    this._cpf = cpf;
  }
  get cpf(): string {
    return this._cpf.replace(/\D/g, "");
  }
}

const pessoa = new Pessoa("Luiz", "Miranda", 30, "000.000.000-00");
pessoa.cpf = "999.000.000-99";
console.log(pessoa.cpf);
