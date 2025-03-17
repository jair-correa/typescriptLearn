export class Empresa {
  readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

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
  getNomeCompleto(): string {
    return (
      `Esses sao os colaboradores de hoje` +
      this.nome +
      ` seu cnpj é` +
      this.cnpj +
      "" +
      this.mostrarColaborador
    );
  }
}

export class Employe extends Empresa {
  getNomeCompleto(): string {
    console.log("FAZENDO ALGO ANTES");
    return super.getNomeCompleto();
  }
}
export class Enterprise extends Empresa {
  getNomeCompleto(): string {
    return "Isso vem do cliente" + this.nome + "" + this.cnpj;
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
const trabalhador = new Employe('Jonas','21.158.0001/12')
const coalborador3 = new Colaborador("Antonio", "Fagundes");
const enterprise = new Enterprise("Joao Bosco", "00.000.000.0001/00");

empresa1.adicionarColaborador(coalborador1);
trabalhador.adicionarColaborador(coalborador1);
empresa1.adicionarColaborador(coalborador3);
console.log(empresa1.nome);

empresa1.mostrarColaborador();
console.log(empresa1);
console.log(enterprise);

/*
SAIDA NO CONSOLE
Facebook
Colaborador { nome: 'Marcos', sbrenome: 'Vasconselos' }
Colaborador { nome: 'Fabio', sbrenome: 'Valinhos' }
Colaborador { nome: 'Antonio', sbrenome: 'Fagundes' }
Empresa {
  colaboradores: [
    Colaborador { nome: 'Marcos', sbrenome: 'Vasconselos' },
    Colaborador { nome: 'Fabio', sbrenome: 'Valinhos' },
    Colaborador { nome: 'Antonio', sbrenome: 'Fagundes' }
  ],
  nome: 'Facebook',
  cnpj: '11.111.111/00001-11'
}
*/
