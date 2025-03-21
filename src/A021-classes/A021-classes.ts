export class Empresa {
  readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaborador(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sbrenome: string,
  ) {}
}

const empresa1 = new Empresa("Facebook", "11.111.111/00001-11");
const coalborador1 = new Colaborador("Marcos", "Vasconselos");
const coalborador2 = new Colaborador("Fabio", "Valinhos");
const coalborador3 = new Colaborador("Antonio", "Fagundes");

empresa1.adicionarColaborador(coalborador1);
empresa1.adicionarColaborador(coalborador2);
empresa1.adicionarColaborador(coalborador3);
console.log(empresa1);

empresa1.mostrarColaborador();
