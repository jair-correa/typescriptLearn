export class Empresa {
  readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  public adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaborador(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}
export class Facebook extends Empresa {
  constructor() {
    super("Facebook", "11.111.111/00001-11");
  }
  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sbrenome: string,
  ) {}
}

const empresa1 = new Facebook();
const colaborador1 = new Colaborador("Marcos", "Vasconselos");
const colaborador2 = new Colaborador("Fabio", "Valinhos");
const colaborador3 = new Colaborador("Antonio", "Fagundes");
const colaboradorRemovido = empresa1.popColaborador();

empresa1.adicionarColaborador(colaborador1);
empresa1.adicionarColaborador(colaborador2);
empresa1.adicionarColaborador(colaborador3);
empresa1.popColaborador();
console.log(colaboradorRemovido);
console.log(empresa1);
